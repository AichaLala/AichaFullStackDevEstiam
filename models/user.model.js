const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jswebtoken');
const config = require('./../config');

const { Schema } = mongoose;
 
const UserSchema = new Schema ({
    fullname: {
        type: String
    },
    job: {
        type: String
    },
    role: {
        type: String,
        enum: ['rh', 'admin', 'employee'],
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, {
    timestamps: true
});
 
const userSchema = mongoose.model('User', UserSchema);

UserSchema.pre('save', function (next) {
    if (this.password) {
        if (this.isModified('password' || this.isNew) {
            this.password = bcrypt.hashSync(this.password, 8);
        } else {
            return next();
        }
    } esle {
         next();
    }
});

UserSchema.methods.comparePassword = function (pw) {
    let passwordIsValid = bcrypt.compareSync(pw, this.password);

    return !!passwordIsValid;
}


UserSchema.methods.getJWT = function () {
    return jwt.sign({
        
        id: this._id.toString()
    }, config.TOKEN_SECRET, {
        expiresIn: 86400
    });

};

module.exports = userSchema;
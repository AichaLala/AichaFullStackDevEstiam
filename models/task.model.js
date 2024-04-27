const mongoose = require('mongoose');

const { Schema } = mongoose ;
const TaskSchema = new Schema(
    {
        tittle: {
            type: String,
        },
        descrption: {
            type: String,
        },
        status: {
            type: String,
            enum: ['to-do', 'doing', 'done'],
        },
        dueDate: {
            type: Date,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User', 
            
        },
    },
        {
            timestamps: true,
        }
    
);

const taskSchema = mongoose.model('Task', TaskSchema);

module.exports = taskSchema;
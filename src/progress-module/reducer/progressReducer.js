/**
 *  Created by cl on 2018/5/17
 */

const reRenderOneTask = (task, state) => {
    const newTasks = state.tasks.map(oneTask => {
        return oneTask.id === task.id ? task : oneTask;
    });
    return Object.assign({}, {tasks: newTasks});
};

const deleteOneTask = (task, state) => {
    const newTasks = Object.assign([], state.tasks);
    for(let i = 0; i < newTasks.length; i++){
        if(task.id === newTasks[i].id){
            newTasks.splice(i, 1);
            break;
        }
        continue;
    }
    return Object.assign({}, {tasks: newTasks});
};

export default (state={tasks: []}, action) => {
    switch (action.type){
        case 'progress-init':
            return {tasks: action.initData};
        case 'progress-item-reRender':
            return reRenderOneTask(action.task, state);
        case 'progress-item-remove':
            return deleteOneTask(action.task, state);
        default:
            return state;
    }
};


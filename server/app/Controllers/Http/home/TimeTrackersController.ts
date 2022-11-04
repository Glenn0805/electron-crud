import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TimeTrackersController {
    public async testFunction({response}:HttpContextContract){

        return response.send({test:'HELLO'})
    }

    public async getAllTasks({response}:HttpContextContract){
        try {
            const taskList = await Task.query()

            let taskOption:[{label:string,value:number}] = taskList.map((item)=>({label:item.task_name,value:item.id}))

            return response.send({taskOption})
        } catch (error) {
            console.log(error)
        }
    }
}

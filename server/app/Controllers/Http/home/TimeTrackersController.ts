import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TimeTrackersController {
    public async testFunction({response}:HttpContextContract){

        return response.send({test:'HELLO'})
    }

    public async getAllTasks({response}:HttpContextContract){
        try {
            const taskList = await Task.query()

            return response.send({taskList})
        } catch (error) {
            console.log(error)
        }
    }
}

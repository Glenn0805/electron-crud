import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TimeTrackersController {
    public async testFunction({response}:HttpContextContract){

        return response.send({test:'HELLO'})
    }
}

'use-strict'

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.get('/','TimeTrackersController.testFunction')
    Route.get('/get-task','TimeTrackersController.getAllTasks')

    Route.post('/add-task','TimeTrackersController.addTask')
}).prefix('home')
.namespace('App/Controllers/Http/home')

'use-strict'

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.get('/','TimeTrackersController.testFunction')
}).namespace('App/Controllers/Http/home')

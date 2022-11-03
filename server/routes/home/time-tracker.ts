'use-strict'

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.get('/','TimeTrackersController.testFunction')
}).prefix('home')
.namespace('App/Controllers/Http/home')

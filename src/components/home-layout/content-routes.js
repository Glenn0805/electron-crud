import ScreenShotsComponents from '../content/screen-shot/ScreenShotsComponents'
import TimeTrackerComponent from '../content/time-tracker/TimeTrackerComponent'
const contentRoute = [
    { path: '/time-tracker', element: <TimeTrackerComponent />, id: 'timeTracker', index: true },
    { path: '/screen-shot', element: <ScreenShotsComponents />, id: 'screenShot' }
]

export default contentRoute

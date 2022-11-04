import useShallowEqualSelector from '../../../../shared/hooks/useShallowEqualSelector'

const useTimeTrackerState = (key) => useShallowEqualSelector((state) => state.timeTracker[key])

export default useTimeTrackerState
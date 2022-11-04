import { useSelector, shallowEqual } from 'react-redux'

// eslint-disable-next-line arrow-body-style
const useShallowEqualSelector = (selector:any) => {
    return useSelector(selector, shallowEqual)
}

export default useShallowEqualSelector
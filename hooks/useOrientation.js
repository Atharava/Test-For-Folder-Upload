import { Dimensions } from 'react-native';

export default useOrientation = () => {

  const [ screenInfo, setScreenInfo ]= useState(Dimensions.get('screen'));

  useEffect(() => {

    const onChange = (result)=> {
      setScreenInfo(result.screen);
    }

    Dimensions.addEventListener('change', onChange);

  })

}
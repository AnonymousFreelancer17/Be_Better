import { Button, Text, View } from "react-native";
import React , {useEffect} from "react";
import { Link, useRouter } from "expo-router";

//  redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { increment,decrement } from '../../store/slices/exampleSlice';
import Login from "../auth/login";


export default function Index() {

  const count = useSelector((state: RootState) => state.example.count);
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );


  useEffect(() => {
    if (isAuthenticated) {
      const timeout = setTimeout(() => {
        router.push('/'); 
      }, 0);
      return ()=> clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        router.push('/auth/login');  
      }, 0);  
      return ()=> clearTimeout(timeout)
    }    
  }, []);

  return (
    <View className="flex flex-1 justify-center items-center bg-primary">
      {/* <Text className="text-white">
        Edit app/index.tsx to edit this screen.
      </Text>

      <Link className="text-red-400" href="/auth/register">
        Register
      </Link>
      <Link className="text-red-400" href="/auth/login">
        Login
      </Link>

      <View>
      <Text className="text-white">Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View> */}


    

    </View>
  );
}

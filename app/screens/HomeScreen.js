import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, Text, Button, FlatList, Image, ActivityIndicator } from 'react-native';
import {
  fetchRandomDogImageRequested,
  fetchRandomDogImageCancelled,
  randomDogImagesSelector,
  isLoadingSelector,
  errorMsgSelector,
} from '../modules/randomDogImages';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const randomDogImages = useSelector(randomDogImagesSelector);
  const isLoading = useSelector(isLoadingSelector);
  const errorMsg = useSelector(errorMsgSelector);

  const renderItem = ({ item }) => {
    return <Image source={{ uri: item }} style={{ width: 100, height: 100, margin: 5 }} />;
  };
  return (
    <SafeAreaView>
      <Text style={{ margin: 5, color: 'red' }}>Error: {errorMsg}</Text>
      <Button onPress={() => dispatch(fetchRandomDogImageRequested())} title="Fetch Next Image" />
      <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />
      <Button onPress={() => dispatch(fetchRandomDogImageCancelled())} title="Cancel Request" />
      <FlatList
        numColumns={3}
        data={randomDogImages}
        renderItem={renderItem}
        keyExtractor={({ index }) => `key-${index}`}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

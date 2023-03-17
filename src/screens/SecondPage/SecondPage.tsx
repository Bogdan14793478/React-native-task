import {View, Text, FlatList, ListRenderItem} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import getStyles from './styles';
import {getAllPosts} from '../../api/getPost';
import {useDispatch, useSelector} from 'react-redux';
import {Post, RootState} from '../../redux/actions/interface';
import {Card} from '../../components/Card/Card';

const SecondPage = () => {
  const dispatch: any = useDispatch();
  const posts: Post[] = useSelector((state: RootState) => state.posts);

  const [statePosts, setStatePosts] = useState<Post[] | []>(posts);

  // const posts: Post[] = useSelector((state: RootState) => state.posts);
  // console.log(posts, 'posts');
  const styles = getStyles();

  const renderItem: ListRenderItem<Post> = useCallback(({item}) => {
    return (
      // <Card title={item.title} description={item.body} />
      <View key={item.id}>
        <Text style={styles.textSmall}>{item.title}</Text>
        <Text style={styles.textSmall}>{item.body}</Text>
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyExtractor = useCallback((item: Post) => item.id.toString(), []);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setStatePosts(posts);
  }, [posts]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SecondPage</Text>
      <FlatList
        data={statePosts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default SecondPage;

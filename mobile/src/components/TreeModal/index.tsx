import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';

import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
  onChangeVisibleModal: Function;
  visible: boolean;
}

const TreeModal: React.FC<Props> = ({ onChangeVisibleModal, visible }) => {
  return (
    <>
      <View>
        <Modal
          isVisible={!!visible}
          style={styles.bottomModal}
          onBackdropPress={() => onChangeVisibleModal(false)}
        >
          <View style={styles.bottomModalContent}>
            <View style={styles.row}>
              <Image source={require('../../../assets/profile/profile1.png')} />
              <View style={styles.postHeaderText}>
                <Text style={styles.postHeaderTitle}>João da Silva</Text>
                <Text style={styles.postHeaderSubtitle}>
                  Some name - Castanha-do-Pará
                </Text>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
              >
                <View style={styles.postContent}>
                  <Image
                    source={require('../../../assets/posts/post1-sm.png')}
                  />
                  <View style={styles.row}>
                    <Image
                      source={require('../../../assets/profile/profile1.png')}
                    />
                    <View style={styles.postHeaderText}>
                      <Text style={styles.postHeaderTitle}>João da Silva</Text>
                      <Text style={styles.postHeaderSubtitle}>
                        2020/07/20 - 3:30 PM
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.postComment}>
                    Very happy to make this little action! *-*
                  </Text>
                </View>
                <View style={styles.postContent}>
                  <Image
                    source={require('../../../assets/posts/post2-sm.png')}
                  />
                  <View style={styles.row}>
                    <Image
                      source={require('../../../assets/profile/profile2.png')}
                    />
                    <View style={styles.postHeaderText}>
                      <Text style={styles.postHeaderTitle}>Karina Souza</Text>
                      <Text style={styles.postHeaderSubtitle}>
                        2020/07/21 - 4:30 PM
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.postComment}>Look at that!</Text>
                </View>
              </ScrollView>
            </View>
            <Button
              style={styles.buttom}
              icon="camera"
              mode="contained"
              onPress={() => console.log('Pressed')}
            >
              TAKE A PICTURE
            </Button>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default TreeModal;

import React, { useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../themes/theme-context';

const RatingStars = (props) => {
  const rating = props.rating;
  const themeContext = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    containerAbsolute: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
    },
    iconUnfocused: {
      margin: -2,
      color: themeContext.theme['color-primary-500'],
    },
    icon: {
      margin: -2,
      color: themeContext.theme['text-basic-color'],
    }
  });

  const noStars = <View style={styles.container}>
    <MaterialCommunityIcons style={styles.iconUnfocused} name="star" size={40}/>
    <MaterialCommunityIcons style={styles.iconUnfocused} name="star" size={40}/>
    <MaterialCommunityIcons style={styles.iconUnfocused} name="star" size={40}/>
    <MaterialCommunityIcons style={styles.iconUnfocused} name="star" size={40}/>
    <MaterialCommunityIcons style={styles.iconUnfocused} name="star" size={40}/>
  </View>;

  const handleClick = () => {
    console.log('yoo');
  };

  const halfStar = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star-half" size={40}/>
    </View>
  </View>;

  const oneStar = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
    </View>
  </View>;

  const oneAndAHalfStars = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star-half" size={40}/>
    </View>
  </View>;

  const twoStars = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
    </View>
  </View>;

  const twoAndAHalfStars = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star-half" size={40}/>
    </View>
  </View>;

  const threeStars = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
    </View>
  </View>;

  const threeAndAHalfStars = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star-half" size={40}/>
    </View>
  </View>;

  const fourStars = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
    </View>
  </View>;

  const fourAndAHalfStars = <View style={styles.container}>
    {noStars}
    <View style={styles.containerAbsolute}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <TouchableOpacity onPress={handleClick}>
        <MaterialCommunityIcons style={styles.icon} name="star-half" size={40}/>
      </TouchableOpacity>
    </View>
  </View>;

  const fiveStars = <View style={styles.container}>
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
      <MaterialCommunityIcons style={styles.icon} name="star" size={40}/>
    </View>
  </View>;

  let stars = noStars;

  switch (rating) {
  case 0.5:
    stars = halfStar;
    break;
  case 1:
    stars = oneStar;
    break;
  case 1.5:
    stars = oneAndAHalfStars;
    break;
  case 2:
    stars = twoStars;
    break;
  case 2.5:
    stars = twoAndAHalfStars;
    break;
  case 3:
    stars = threeStars;
    break;
  case 3.5:
    stars = threeAndAHalfStars;
    break;
  case 4:
    stars = fourStars;
    break;
  case 4.5:
    stars = fourAndAHalfStars;
    break;
  case 5:
    stars = fiveStars;
    break;
  }

  return (
    <>
      {stars}
    </>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number,
};

export default RatingStars;

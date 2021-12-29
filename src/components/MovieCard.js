import React, {useState} from "react";
import {View, Text, StyleSheet,TouchableOpacity,Image, TouchableNativeFeedback} from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { Ionicons } from '@expo/vector-icons';
import Images from "../constants/Images";


const MovieCard = () => {
    const [liked, setLiked] = useState(false);

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imdbContainer}>
                    <Image source={Images.IMDB} resizeMode="cover" style={styles.imdbImage}/>
                    <Text style={styles.imdbRating}>9.4</Text>
                </View>
                <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
                <Ionicons name={liked ? "heart" : "heart-outline"} size={25} color={liked ? Colors.HEART : Colors.WHITE} style={{ position: "absolute", bottom: 10, left: 10}}/>
                </TouchableNativeFeedback>
            </View>
            <View>
                <Text style={styles.movieTitle} numberOfLines={3}>URI - Surgical Strike URI</Text>
                <View style={styles.movieSubtitleContainer}>
                    <Text style={styles.movieSubtitle}>Hindi | (U/A)</Text>
                    <View style={styles.rowAndCenter}>
                        <Ionicons name="heart" size={17} color={Colors.HEART} style={{ marginRight: 5}}/>
                            <Text style={styles.movieSubtitle}>90%</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.ACTIVE,
        height: 340,
        width: 230,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    },
    movieTitle:{
        fontFamily: Fonts.EXTRA_BOLD,
        color: Colors.GRAY,
        paddingVertical: 2,
        marginTop: 5,
        width: 230,
    },
    movieSubtitleContainer:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    movieSubtitle:{
        fontFamily: Fonts.REGULAR,
        fontSize: 12,

    },
    rowAndCenter:{
        flexDirection:"row",
        alignItems: "center",
    },
    imdbContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: Colors.YELLOW,
        borderBottomLeftRadius:5,
        borderTopRightRadius: 12,
        paddingVertical: 3,
    },
    imdbImage:{
        height: 20,
        width: 50,
        borderBottomLeftRadius: 5,
    },
    imdbRating: {
        marginRight: 5,
        color:Colors.HEART,
        fontSize: 14,
        fontFamily:Fonts.EXTRA_BOLD,
    }

});

export default MovieCard;
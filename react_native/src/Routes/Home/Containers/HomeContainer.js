import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import Home from "../components/Home";
import {} from "../modules/home";

const mapStateToProps = (state)=> ({
    
})

const mapActionCreatetors = {};

// export  function(){
//     return (
//         <View>
//             <Text>
//                 Hwllo
//                 </Text>
//         </View>
//     )
// }

export default connect(mapStateToProps, mapActionCreatetors)(Home);
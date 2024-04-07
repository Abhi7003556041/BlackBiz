//import liraries
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {AppStackModel} from '../Models/Navigation/AppStackModel';
import CableTv from '../Screen/CableTvRecharge/CableTv';
import Home from '../Screen/Home/Home';
import MobRecharge from '../Screen/MobileRecharge/MobRecharge';
import ToMobile from '../Screen/MoneyTransfer/ToMobile';
import TransferToBank from '../Screen/MoneyTransfer/TransferToBank';
import Passbook from '../Screen/MyZone/Passbook';
import Recharge from '../Screen/MyZone/Recharge';
import Wallet from '../Screen/MyZone/Wallet';
//suman add
import Newsindex from '../Screen/News/Newsindex';
import Fullnews from '../Screen/News/Fullnews';
import LearningIndex from '../Screen/Learning/LearningIndex';
import Bookmark from '../Screen/Learning/Bookmark';
import Topmentor from '../Screen/Learning/Topmentor';
import MostPopularCourses from '../Screen/Learning/MostPopularCourses';
import LearningSearch from '../Screen/Learning/LearningSearch';
import EnrolPage from '../Screen/Learning/EnrolPage';

import SelectOperator from '../Screen/CableTvRecharge/SelectOperator';
import DthRecharge from '../Screen/CableTvRecharge/DthRecharge';
import PayUsingCrad from '../Screen/EducationFees/PayUsingCard';
import CreditCardPayment from '../Screen/CreditCard/CreditCardPayments';
import ManageNotification from '../Screen/CreditCard/ManageNotification';
import FAQ from '../Screen/CreditCard/FAQ';
import PayBroadBandBills from '../Screen/BroadBandBills/PayBroadBandBills';
import OperatorBills from '../Screen/BroadBandBills/OperatorBills';
import Search from '../Screen/Home/Search';
import Notification from '../Screen/Notification/Notification';
//suman adds
import SelectPayment from '../Screen/Learning/SelectPayment';
import ConfirmPayment from '../Screen/Learning/ConfirmPayment';
import Successful from '../Screen/Learning/Successful';
import MyCourses from '../Screen/Learning/MyCourses';
import OngoingCourses from '../Screen/Learning/OngoingCourses';
import Scan from '../Screen/ScanQrCode/Scan';
import PaymentSection from '../Screen/ScanQrCode/PaymentSection';
import CompletedCourses from '../Screen/Learning/CompletedCourses';
import Vedio from '../Screen/Learning/Video';
import Ottindex from '../Screen/OTT/Ottindex';
import EnglishWebSeries from '../Screen/OTT/EnglishWebSeries';
import VedioPlay from '../Screen/OTT/VideoPlay';

import PodcastHome from '../Screen/Podcast/PodcastHome';
import Trending from '../Screen/Podcast/Trending';
import NewUpdates from '../Screen/Podcast/NewUpdates';
import Episode from '../Screen/Podcast/Episode';
import PlayPodcast from '../Screen/Podcast/PlayPodcast';
import Eshop_Index from '../Screen/Eshop/Eshop_Index';
import Discover from '../Screen/Podcast/Discover';
import SearchPodcast from '../Screen/Podcast/Search';
import SearchPodcastInList from '../Screen/Podcast/SearchPodcastInList';
import MyLibrary from '../Screen/Podcast/MyLibrary';
import Index from '../Screen/Business/Index';
import WatchList from '../Screen/Business/WatchList';
import MyProfile from '../Screen/Business/MyProfile';
import StartTrading from '../Screen/Business/StartTrading';
import SeeAllNews from '../Screen/Business/SeeAllNews';
import SeeAllAnalysisBlog from '../Screen/Business/SeeAllAnalysisBlog';
import ViewProduct from '../Screen/Eshop/ViewProduct';
import Payment from '../Screen/Eshop/Payment';
import MyCart from '../Screen/Eshop/MyCart';
import MentorProfile from '../Screen/Learning/MentorProfile';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import SubCategory from '../Screen/Eshop/Subcategory';
import SubCategoryProduct from '../Screen/Eshop/SubCategoryProduct';
import Wishlist from '../Screen/Eshop/WishList';
import AddAddress from '../Screen/Eshop/AddAddress';
import OrderHistory from '../Screen/Eshop/OrderHistory';
import Social_Index from '../Screen/Social/Social_Index';
import SinglePost from '../Screen/Social/SinglePost';
import CreatePost from '../Component/Social/CreatePost';
import WishlistSocial from '../Screen/Podcast/WishlistSocial';
import VideoPlayer from '../Screen/OTT/VideoPlayer';
import Web_Series from '../Screen/OTT/Web_Series';
import Featured from '../Screen/OTT/Featured';
import OttWatchList from '../Screen/OTT/OttWatchList';
import Profile from '../Screen/Profile/Profile_Index';
import OrderDetails from '../Screen/Eshop/OrderDetails';
import OrderSuccessFull from '../Screen/Eshop/OrderSuccessFullpage';
import LoyalityHome from '../Screen/Loyalty/LoyalityHome';
import WalletIndex from '../Screen/Wallet/WalletIndex';
import MyRewards from '../Screen/Rewards/RewardsIndex';
import NavigationService from '../Services/NavigationService';

const Stack = createStackNavigator<AppStackModel>();
// create a component
const AppStack = () => {
  const data = useSelector((state: RootState) => state.User.userData);

  console.log('>>>>>>>>>>>>>>>>', data);
  useEffect(() => {
    checkUrl();
  }, []);

  const checkUrl = () => {
    Linking.getInitialURL().then(url => {
      // console.log("sdjnfjdsnf",url)
      if (url != null) {
        let data = {url: url};
        // console.log('deeplinkdata',data)
        handleDeepLink(data);
      }
    });
    Linking.addEventListener('url', handleDeepLink);
  };

  const handleDeepLink = async (e: any) => {
    // alert("handleDeepLink")
    let urlArr = e.url.split('/');
    console.log('urlArr', urlArr);
    let length = urlArr.length;
    let postpath = urlArr[3];
    // console.log("postpath",postpath);
    if (postpath == 'post') {
      let postId = await urlArr[length - 1];
      console.log('PostId', postId);
      NavigationService.navigate('SinglePost', {_id: postId});
      // Navigation.navigate('Feed')
    } else if (postpath == 'product') {
      let productId = urlArr[length - 2];
      let remoteUserId = urlArr[length - 1]
      NavigationService.navigate('ViewProduct', {ProductId: productId, remoteUserId: remoteUserId});
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ToMobileTransfer" component={ToMobile} />
      <Stack.Screen name="TransferToBank" component={TransferToBank} />
      <Stack.Screen name="Passbook" component={Passbook} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Recharge" component={Recharge} />
      <Stack.Screen name="MobileRecharge" component={MobRecharge} />
      <Stack.Screen name="CableTv" component={CableTv} />
      <Stack.Screen name="Newsindex" component={Newsindex} />
      <Stack.Screen name="Fullnews" component={Fullnews} />
      <Stack.Screen name="LearningIndex" component={LearningIndex} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
      <Stack.Screen name="Topmentor" component={Topmentor} />
      <Stack.Screen name="MostPopularCourses" component={MostPopularCourses} />
      <Stack.Screen name="LearningSearch" component={LearningSearch} />
      <Stack.Screen name="SelectOperator" component={SelectOperator} />
      <Stack.Screen name="DthRecharge" component={DthRecharge} />
      <Stack.Screen name="EducationFeesPayUsingCrad" component={PayUsingCrad} />
      <Stack.Screen name="CreditCardPayment" component={CreditCardPayment} />
      <Stack.Screen name="EnrolPage" component={EnrolPage} />
      <Stack.Screen name="ManageNotification" component={ManageNotification} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="PayBroadBandBills" component={PayBroadBandBills} />
      <Stack.Screen name="OperatorBills" component={OperatorBills} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="PaymentSection" component={PaymentSection} />

      <Stack.Screen name="SelectPayment" component={SelectPayment} />
      <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
      <Stack.Screen name="Successful" component={Successful} />
      <Stack.Screen name="MyCourses" component={MyCourses} />
      <Stack.Screen name="OngoingCourses" component={OngoingCourses} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="CompletedCourses" component={CompletedCourses} />
      <Stack.Screen name="Vedio" component={Vedio} />
      <Stack.Screen name="Ottindex" component={Ottindex} />
      <Stack.Screen name="EnglishWebSeries" component={EnglishWebSeries} />
      <Stack.Screen name="VedioPlay" component={VedioPlay} />
      <Stack.Screen name="MentorProfile" component={MentorProfile} />

      <Stack.Screen name="Eshop_Index" component={Eshop_Index} />
      <Stack.Screen name="MyCart" component={MyCart} />

      <Stack.Screen name="PodcastHome" component={PodcastHome} />
      <Stack.Screen name="Trending" component={Trending} />
      <Stack.Screen name="NewUpdates" component={NewUpdates} />
      <Stack.Screen name="Episode" component={Episode} />
      <Stack.Screen name="PlayPodcast" component={PlayPodcast} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="SearchPodcast" component={SearchPodcast} />
      <Stack.Screen
        name="SearchPodcastInList"
        component={SearchPodcastInList}
      />
      <Stack.Screen name="MyLibrary" component={MyLibrary} />

      <Stack.Screen name="BusinessIndex" component={Index} />
      <Stack.Screen name="watchList" component={WatchList} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="StartTrading" component={StartTrading} />
      <Stack.Screen name="SeeAllNews" component={SeeAllNews} />
      <Stack.Screen name="SeeAllAnalysisBlog" component={SeeAllAnalysisBlog} />
      <Stack.Screen name="ViewProduct" component={ViewProduct} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="SubCategory" component={SubCategory} />
      <Stack.Screen name="SubCategoryProduct" component={SubCategoryProduct} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Social_Index" component={Social_Index} />
      <Stack.Screen name="SinglePost" component={SinglePost} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="WishlistSocial" component={WishlistSocial} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      <Stack.Screen name="WebSerise" component={Web_Series} />
      <Stack.Screen name="OttWatchList" component={OttWatchList} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="OrderSuccessFull" component={OrderSuccessFull} />
      <Stack.Screen name="LoyalityHome" component={LoyalityHome} />
      <Stack.Screen name="WalletIndex" component={WalletIndex} />
      <Stack.Screen name="MyRewards" component={MyRewards} />

      {/* <Stack.Screen name="EditPost" component={EditPost}/> */}
    </Stack.Navigator>
  );
};

//make this component available to the app
export default AppStack;

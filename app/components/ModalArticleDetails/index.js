import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import Images from "../../utils/imagePath";
import styles from "./styles";
import { connect } from "react-redux";
import * as articleActions from "../../realm/redux/action";
import NavigationService from "../../navigation/NavigationService";
import { getCurrentIncrementPage } from "../../utils/helper";
import { connectLang } from "@language";

class ModalArticleDetailsView extends Component {
  static propTypes = {
    isModalVisible: PropTypes.bool,
    onPressedDismiss: PropTypes.func,
    onPressedShow: PropTypes.func,
    selectedItem: PropTypes.object
  };

  static defaultProps = {
    isModalVisible: false,
    onPressedDismiss: () => {},
    onPressedShow: () => {},
    selectedItem: {
      uri: "",
      ArticleNumber: "",
      ArticleName: "",
      Facts: "",
      SourceOfOrigin: "",
      Tips: "",
      Note: "",
      ImageList: [],
      ArticleSubGroupName: "",
      ArticleGroupName: "",
      similarArticleFound: true
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      isSmilarArticle: false
    };
  }
  
  async onNavigatedToSimilarArticle() {
    await this.props.similarArticleRequest(this.props.selectedItem.ID);
    const { similarArticleList } = this.props;
    console.log(similarArticleList);

    if (similarArticleList != null) {
      if (similarArticleList.length > 0) {
        this.props.onPressedDismiss();
        NavigationService.navigate("SimilarArticles", {
          result: similarArticleList,
          articleName: this.props.selectedItem.ArticleName
        });
      } else {
        ToastAndroid.show(
          this.props.strings.Nosimilararticles,
          ToastAndroid.SHORT
        );
      }
    }
  }

  onTappedDismiss() {
    this.setState({
      isSmilarArticle: false
    });
    this.props.onPressedDismiss();
  }

  onTappedNav() {
    this.setState({
      isSmilarArticle: true
    });
    this.onNavigatedToSimilarArticle();
  }

  renderBannerItem(item, index) {}

  renderHeader() {
    var i = getCurrentIncrementPage();

    return (
      <View>
        <View style={styles.modalFlatlistCloseRow}>
          <TouchableOpacity
            onPress={() => {
              this.onTappedDismiss();
            }}
          >
            <Image
              style={styles.closeImage}
              source={Images.close_icon}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.modalFlatlistImagePreviewRow}>
          <Image
            style={styles.modalFlatlistImagePreviewRowImage}
            source={{
              uri:
                this.props.selectedItem.uri == undefined
                  ? this.props.selectedItem.ImageList[0]
                  : this.props.selectedItem.uri
            }}
          />
          {this.props.isCustomerQueueDisable ? (
            <TouchableOpacity
              style={styles.sendImageContainer}
              onPress={() => {
                this.onTappedDismiss();
                NavigationService.navigate(
                  "Purchase",
                  { selectedItem: this.props.selectedItem },
                  "Purchase" + i
                );
              }}
            >
              <Image
                style={styles.sendImage}
                source={Images.send_icon}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }

  renderModalView(item) {
    switch (item) {
      case 0:
        return (
          <View style={styles.modalFlatlistArticleSubGroupRow}>
            <Text style={styles.subgroupnameText}>
              {this.props.selectedItem.ArticleGroupName}
            </Text>
            <Text style={styles.subgroupnameText}>
              {this.props.selectedItem.ArticleSubGroupName &&
                " / " + this.props.selectedItem.ArticleSubGroupName}
            </Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.modalFlatlistArticleNumberRow}>
            <View style={styles.modalFlatlistArticleNumberRowRight}>
              <Text style={styles.modalFlatlistArticleNumberRowRightText}>
                {this.props.strings.ArticleNumber}
              </Text>
            </View>
            <View style={styles.modalFlatlistArticleNumberRowLeft}>
              <Text style={styles.articleNumberValueText}>
                {this.props.selectedItem.ArticleNumber}
              </Text>
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.modalFlatlistRimsRow}>
            <View style={styles.modalFlatlistRimsRowTop}>
              <Text style={styles.modalFlatlistArticleNumberRowRightText}>
                {this.props.selectedItem.ArticleName} :
              </Text>
            </View>
            <View style={styles.modalFlatlistRimsRowBottom}>
              <Text style={styles.modalFlatlistRimsRowBottomText}>
                {this.props.selectedItem.Facts}
              </Text>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.modalFlatlistOriginsOfMaterialRow}>
            <View style={styles.modalFlatlistRimsRowTop}>
              <Text style={styles.modalFlatlistArticleNumberRowRightText}>
                {this.props.strings.Originsofmaterial}
              </Text>
            </View>
            <View style={styles.modalFlatlistRimsRowBottom}>
              <Text style={styles.modalFlatlistRimsRowBottomText}>
                {this.props.selectedItem.SourceOfOrigin}
              </Text>
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.modalFlatlistMethodToMakeSureRow}>
            <View style={styles.modalFlatlistRimsRowTop}>
              <Text style={styles.modalFlatlistArticleNumberRowRightText}>
                {this.props.strings.Methodtomakesure}
              </Text>
            </View>
            <View style={styles.modalFlatlistRimsRowBottom}>
              <Text style={styles.modalFlatlistRimsRowBottomText}>
                {this.props.selectedItem.Tips}
              </Text>
            </View>
          </View>
        );
      case 5:
        return (
          <View style={styles.modalFlatlistPleaseNoteRow}>
            <View style={styles.modalFlatlistRimsRowTop}>
              <Text style={styles.modalFlatlistArticleNumberRowRightText}>
                {this.props.strings.Pleasenote}
              </Text>
            </View>
            <View style={styles.modalFlatlistRimsRowBottom}>
              <Text style={styles.modalFlatlistRimsRowBottomText}>
                {this.props.selectedItem.Note}
              </Text>
            </View>
          </View>
        );
      case 6:
        return (
          <View style={styles.modalFlatlistSimilarArticlesRow}>
            
              <TouchableOpacity
                style={styles.similarArticleButton}
                onPress={() => {
                  this.onTappedNav();
                }}>
                <Text style={styles.similarText}>
                  {this.props.strings.SimilarArticlesCaps}
                </Text>
              </TouchableOpacity>
           
          </View>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <Modal
        isVisible={this.props.isModalVisible}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View style={styles.modalView}>
          <FlatList
            ListHeaderComponent={this.renderHeader()}
            style={styles.modalFlatlist}
            data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
            renderItem={({ item }) => this.renderModalView(item)}
            stickyHeaderIndices={[0]}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    similarArticleList: state.realmReducer.similarArticleList,
    isCustomerQueueDisable: state.customerQueueReducer.isDisable,
    strings: this.props
  };
}
function mapDispatchToProps(dispatch) {
  return {
    similarArticleRequest: id =>
      dispatch(articleActions.similarArticleRequest(id))
  };
}

const ConnectedElement = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectLang(ModalArticleDetailsView));

export default ConnectedElement;


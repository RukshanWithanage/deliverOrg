import { StyleSheet, PixelRatio, Dimensions } from 'react-native';
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        paddingTop: '5%'
    },
    modalFlatlist: {
        backgroundColor: 'transparent',
    },
    modalFlatlistCloseRow: {
        height: deviceHeight * 0.04,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '2%'
    },
    modalFlatlistImagePreviewRow: {
        height: 249,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1
    },
    modalFlatlistImagePreviewRowImage: { flex: 1 },
    modalFlatlistArticleSubGroupRow: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingLeft: '5%',
        paddingVertical: 10,
        flexDirection: 'row'
    },
    modalFlatlistArticleNumberRow: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    modalFlatlistArticleNumberRowRight: {
        backgroundColor: '#fff',
        width: '60%',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    modalFlatlistArticleNumberRowRightText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#2D2D2D'
    },
    articleNumberValueText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#2D2D2D'
    },
    modalFlatlistArticleNumberRowLeft: {
        backgroundColor: '#fff',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '5%'
    },
    modalFlatlistRimsRow: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1
    },
    modalFlatlistRimsRowTop: {
        backgroundColor: '#fff',
        height: 40,
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    modalFlatlistRimsRowBottom: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: '5%',
        paddingBottom: '3%'
    },
    modalFlatlistRimsRowBottomText: {
        fontSize: 12,
        fontWeight: '300',
        color: '#2D2D2D'
    },
    modalFlatlistOriginsOfMaterialRow: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1
    },
    modalFlatlistMethodToMakeSureRow: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1
    },
    modalFlatlistPleaseNoteRow: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 0.9
    },
    modalFlatlistSimilarArticlesRow: {
        height: deviceHeight * 0.06,
        backgroundColor: '#fff',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '5%'
    },
    similarArticleButton: {
        backgroundColor: '#EDEDED',
        padding: 4,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: '#D2D2D2',
        borderWidth: 1
    },
    similarText: {
        fontSize: 12,
        color: '#696969'
    },
    closeImage: {
        width: 13,
        height: 13,
    },
    subgroupnameText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#2D2D2D'
    },
    sendImage: {
        width: 40,
        height: 40
    },
    sendImageContainer: {
        width: 50,
        height: 50,
        position: 'absolute',
        borderRadius:25,
        bottom: 12,
        right: 12,
        borderColor: '#FFFFFF',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;

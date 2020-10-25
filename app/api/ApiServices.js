import request from "./ApiCentral";
import * as api from "./Api";

function getCustomerQueue(SmartYardId) {
  return request({
    url: api.Customerqueue_URL + SmartYardId,
    method: "GET"
  });
}
function getCQactualPurchaseStage(id) {
  return request({
    url: api.cqActualPurchaseStage_URL + id,
    method: "GET"
  });
}
function putUpdatePurchaseStage(data) {
  return request({
    url: api.UpdatePurchaseStage_URL,
    method: "PUT",
    data: data
  });
}
function putVerifyCustomer(data) {
  return request({
    url: api.VerifyCustomer_URL,
    method: "PUT",
    data: data
  });
}
function putUpdatePurchasingCustomerContact(data) {
  return request({
    url: api.PurchasingCustomerContact_URL,
    method: "PUT",
    data: data
  });
}
function putPayout(id, data) {
  return request({
    url: api.payout_URL + id,
    method: "PUT",
    data: data
  });
}
function putUpdatePurchaseItem(id, data, type = "PUT") {
  return request({
    url: api.PurchaseItemUpdate_URL + id,
    method: type,
    data: data
  });
}
function putPayoutHold(id, data) {
  return request({
    url: api.payoutHold_URL + id,
    method: "PUT",
    data: data
  });
}
function getArticleGroups() {
  return request({
    url: api.articleGroups_URL,
    method: "GET"
  });
}
function getArticleSubGroups() {
  return request({
    url: api.articleSubGroups_URL,
    method: "GET"
  });
}
function getArticle() {
  return request({
    url: api.article_URL,
    method: "GET"
  });
}
function getArticleImages() {
  return request({
    url: api.articleImages_URL,
    method: "GET"
  });
}
function getSimilarArticle() {
  return request({
    url: api.similarArticles_URL,
    method: "GET"
  });
}
function getAccountTypes() {
  return request({
    url: api.accountType_URL,
    method: "GET"
  });
}
function getPurchaseItems(id) {
  return request({
    url: api.purchaseItems_URL + id,
    method: "GET"
  });
}
function getPaymentTerms() {
  return request({
    url: api.paymentTerms_URL,
    method: "GET"
  });
}
function postPurchaseItemsUpload(itemList) {
  return request({
    url: api.purchaseItemsUpload_URL,
    method: "POST",
    data: itemList
  });
}
function postSplit(id, itemList) {
  return request({
    url: api.split_URL + id,
    method: "POST",
    data: itemList
  });
}
function getDeductionReasons() {
  return request({
    url: api.purchaseDeductionReasons_URL,
    method: "GET"
  });
}
function getBanks() {
  return request({
    url: api.bank_URL,
    method: "GET"
  });
}
function deletePurchase(id, data) {
  return request({
    url: api.purchase_delete_URL + id,
    method: "DELETE",
    data: data
  });
}
function countPurchase(id) {
  return request({
    url: api.purchase_count + id,
    method: "GET",
  });
}
function userCompanies(userId) {
  return request({
    url: api.userCompanies + userId,
    method: "GET",
  });
}
function userYards(companyId, userId) {
  return request({
    url: api.userYards + companyId + "/" + userId,
    method: "GET",
  });
}
function userStations(companyId, userId, yardId) {
  return request({
    url: api.userStations + companyId + "/" + yardId + "/" + userId,
    method: "GET",
  });
}
function splitPayout(id, data) {
  return request({
    url: api.splitPayout + id,
    method: "PUT",
    data: data
  });
}
function splitHold(id, data) {
  return request({
    url: api.splitHold + id,
    method: "PUT",
    data: data
  });
}
function getCultureList() {
  return request({
    url: api.cultureList,
    method: "GET"
  });
}
function getCountryList() {
  return request({
    url: api.country_URL,
    method: "GET"
  });
}
function getArticlePrice(customerId, articleId) {
  return request({
    url: api.articlePrice+customerId+"/price/article/"+articleId,
    method: "GET"
  });
}
function getIndividualSsnCountryList(Ssn) {
  return request({
    url: api.individualSsnForCountry + Ssn,
    method: "GET"
  });
}
function getIndividualSsnIdentifierList(Ssn, Country) {
  return request({
    url: api.individualSsnForIdentifier + Ssn + "/country/" + Country,
    method: "GET"
  });
}
function getIndividualSsnCustomerData(Ssn, Country, Identifier) {
  return request({
    url: api.individualSsnForCustomerData + Ssn + "/country/" + Country + "/CustomerIdentifierType/" + Identifier,
    method: "GET"
  });
}
function pushCustomerIntoQueue(purchasingCustomerId, costCenterId) {
  return request({
    url: api.addCustomerToQueue + purchasingCustomerId + "/costCenter/" + costCenterId,
    method: "GET"
  });
}
function searchOrganizationalCustomerBySsn(orgNameOrNo) {
  return request({
    url: api.organizationalCustomerSearch + "?numberOrName=" + orgNameOrNo,
    method: "GET"
  });
}
function searchOrganizationalCostCenterCustomerBySsn(organizationNo) {
  return request({
    url: api.organizationCostCenters + organizationNo+"/CostCenter",
    method: "GET"
  });
}
function getCostCenterDetails(costCenterId) {
  return request({
    url: api.costCenterDetails + costCenterId,
    method: "GET"
  });
}

const ApiServices = {
  getCustomerQueue,
  getArticleGroups,
  getArticleSubGroups,
  getArticle,
  getArticleImages,
  getSimilarArticle,
  putUpdatePurchaseStage,
  putVerifyCustomer,
  putUpdatePurchasingCustomerContact,
  getAccountTypes,
  getPurchaseItems,
  postPurchaseItemsUpload,
  getPaymentTerms,
  putPayout,
  putPayoutHold,
  getCQactualPurchaseStage,
  postSplit,
  getDeductionReasons,
  putUpdatePurchaseItem,
  getBanks,
  deletePurchase,
  countPurchase,
  userCompanies,
  userYards,
  userStations,
  splitPayout,
  splitHold,
  getCultureList,
  getArticlePrice,
  getCountryList,
  getIndividualSsnCountryList,
  getIndividualSsnIdentifierList,
  getIndividualSsnCustomerData,
  pushCustomerIntoQueue,
  searchOrganizationalCustomerBySsn,
  searchOrganizationalCostCenterCustomerBySsn,
  getCostCenterDetails
};

export default ApiServices;

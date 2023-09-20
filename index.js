var myHeaders = new Headers();
myHeaders.append("Cookie", "__cf_bm=h_vDDD0mAQ6lawBGnn70VVaT7gb2wAyt1oDDgVxdu8I-1695225248-0-AQTTPC0XVjfxSNfJ28E3H0e9cZIpVaA2v5vkaW2JR3YSDWk13DmbOpN9yZ0YhV1tDqi/1RRI685z9j/xFGulY7A=");
myHeaders.append("Authorization", "PLkrCi8BqSwjWzObVOJRK3cfqKmPO7QnY8VF0oPEEPoEmLyB2OYCoi5j");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.pexels.com/v1/search?query=cats", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
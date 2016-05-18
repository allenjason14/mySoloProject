angular.module("wattReads").service("storyService", function($http){

  this.addStory = function(storyData){
    return $http({
      method:'POST',
      url: "/newStory",
      data: storyData
    }).then(function(response){
      console.log(response.data);
      return response.data
    })
  }

  this.readStory = function(){
      return $http({
        method:"PUT",
        url: "/readStory" + story._id,
      }).then(function(response){
        return response.data
      })
  }

  this.saveSections = function(){
    return $http({
      method: "PUT",
      url: "/updateStory" + story._id,
      data: storyData,
      body:{
        title: story.title,
        text: story.text
      }
    }).then (function(response){
      return response.data
    })
  };

  // this.updateProduct = function(product){
  //         return $http({
  //             method: "PUT",
  //             url: "/api/products/" + product._id,
  //             data: {
  //                 name: product.name,
  //                 price: product.price
  //             }
  //         }).then(function(response){
  //             return response.data
  //         })
  //     };

  this.readStory = function(){
    return $http({
      method:'GET',
      URL: "/readStory"
    }).then(function(response){
      return response.data
    })
  }


});

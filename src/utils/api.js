const apiKey = "DrsAXpLmpvuCa6VgxnTso24_XR2RIaGmBO0F81iEZtlBmTSCOledP7U2sjCIsK5dkYSqW9j81WMDJ-anQQv-csW8rqCOQKFAp1-eTU3yfpSOui1n8yOEDpcAigqHZHYx";

export const fetchData = async(location, type, filter) => {
  
  
  const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${type}&location=${location}&sort_by=${filter}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  });

  const jsonResponse = await response.json();
  
  if (jsonResponse.businesses) {
    return jsonResponse.businesses.map((business) => {

      return {
        
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
      }
    });
    // return all of the object elements using map
  }
  
  
}





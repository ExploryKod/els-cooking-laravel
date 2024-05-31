import {$} from "../common/variables";

export const generateHtml = (parentNodeAnchor = "", textNode, htmlTag = "p") => {
  const modalBodyTextWrapper = document.querySelector(`${parentNodeAnchor}`);
  console.log('we enter generatehtml', modalBodyTextWrapper)
  // Check if the parentNode exists before manipulating the DOM
  if (modalBodyTextWrapper) {
    console.log("we enter modalBodyTextWrapper")

    const node = document.createElement(`${htmlTag}`);
    console.log('the current node', node)
    const textnode = document.createTextNode(textNode); // Use item instead of dataDescription
    console.log('node is ==> ', textNode)
    node.appendChild(textnode);
    modalBodyTextWrapper.appendChild(node);
    console.log("generate html ok")

  }
}

export function fetchData(htmlId, dataSource = "", parentNodeAnchor = "", htmlTag, keys= {}) {

  const parentNode = document.querySelector(`${parentNodeAnchor}`)

  try {
    fetch(`${dataSource}`, {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('La réponse du réseau n\'est pas ok');
        }
        return response.json();
      })
      .then(data => {

        const item = data.find((element) => element.id === htmlId)
        console.log("item", item)
        $(parentNode).empty();
        if(item) {
          keys.forEach((key, index) => {
            console.log("key", key)
            if(key !== 'id') {
              generateHtml(parentNodeAnchor, item[key], htmlTag);
            }

          })
        } else {
          console.log("there is no id to this project data, provide an id.")
        }


      })
      .catch(err => {
        console.log('Error in fetch request', err);
      });
  } catch(err) {
    console.log('Error in fetch request', err);
  }
};

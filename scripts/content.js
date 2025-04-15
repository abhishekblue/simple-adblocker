const susWords = ['Advertisement', 'doubleclick', 'taboola', 'pubmatic', 'larapush']

function removeAds() {
    console.log("AdBlocker running and looking for ads...")

    const allElements = document.querySelectorAll("*")
    for (const element of allElements) {
        for (const attr of element.attributes) {
            console.log(attr)
            susWords.forEach(e => {
                if (attr.value.includes(e)) {
                    console.log(`ad found at:`, element);
                    element.remove()
                  }
            });
        }
    }
}

removeAds();
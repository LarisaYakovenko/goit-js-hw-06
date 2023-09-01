const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

const list = document.querySelector('#categories');
[...list.children].forEach(item => {
    const title = item.firstElementChild.textContent;
    const itemsLength = item.lastElementChild.children.length;
    console.log(`Category: ${title}  Elements: ${itemsLength}`);
});



// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title}  Elements: ${itemsLength}`);
// });



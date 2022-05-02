$(document).ready(() => {
    let mobileTemplate = `<div class="mobile-categories">`;
    let parentCategories = $('.category .parent');
    parentCategories.each((index, el) => {
        console.log(el);
        mobileTemplate += el.outerHTML;
    });


    mobileTemplate += `</div>`;
    $('#app').append(mobileTemplate);


    $('.parent').click((e) => {
        e.preventDefault();

        let currentEl = $(e.currentTarget);
        let categoryId = currentEl.data('category-id');

        $(`.category[data-category-id="${categoryId}"]`);
    });
});
$(document).ready(function(){

    // Clas active al primer enlace
    $('.category-list .category-item[category="all"]').addClass('ct_item-active');
    // filtrando productos
    $('.category-item').click(function(){
        let catProduct = $(this).attr('category');
        console.log(catProduct)

        $('.category-item').removeClass('ct_item-active')
        $(this).addClass('ct_item-active')
        // ocultando productos -========================-
        $('.producto-item').css('transform', 'scale(0)')        
        function hideProduct(){
            $('.producto-item').hide()
        }; setTimeout(hideProduct, 400);
        //Mostrando producto
        function showProduct(){
            $('.producto-item[category="'+catProduct+'"]').css('transform', 'scale(1)')
            $('.producto-item[category="'+catProduct+'"]').show()
        }; setTimeout(showProduct, 400);

    });
     //MOSTRANDO TODOS LOS PRODUCTOS
        $('.category-item[category="all"]').click(function(){
            function showAll(){
                $('.producto-item').show();
                $('.producto-item').css('transform','scale(1)')
            }; setTimeout(showAll, 400)
    });

});
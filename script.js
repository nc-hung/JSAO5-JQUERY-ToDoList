$(document).ready(() => {

    // Thêm "<span class='close'>x</span>" vào từng thẻ li
    $('li').append("<span class='close'>x</span>")



    // Xử lý sự kiện click vào nút [Add]
    $(".btn-add").click(function() {
        // Lấy string trong input text
        let value = $("#input").val();

        // Xác thực dữ liệu: Không được để trống input text
        if (value == "") {
            alert('Không được để trống!')
        } else {
            // Tạo thẻ "li" với text content là value
            let li = document.createElement("li");
            $(li).text(value);
            // Tạo nút close cho thẻ li, gắn class và thêm nút này vào li
            $(li).append("<span class='close'>x</span>")
                // Thêm li mới vừa tạo vào phần tử con đầu tiên của ul
            $('#to-do-list').prepend($(li));
        }
        // Reset lại value của input text là rỗng
        $("#input").val("");
        // console.log($("#to-do-list").children(), "listtrong")

        // Xử lý sự kiện khi nhấn nút close
        let a = $('.close');
        for (let i = 0; i < a.length; i++) {
            $(a[i]).click(function() {
                $(this).parent().remove();
            })
        }

        // Xử lý sự kiện click vào mỗi li ---------------------
        // let lists = $('#to-do-list').children();
        // for (let i = 0; i < lists.length; i++) {
        //     $(lists[i]).click(function() {
        //         //toggleClass: chuyển đổi qua lại giữa thêm và xóa class
        //         $(lists[i]).toggleClass('checked');
        //     });
        // }
    });
    // Xử lý sự kiện khi nhấn nút close
    let a = $('.close');
    for (let i = 0; i < a.length; i++) {
        $(a[i]).click(function() {
            $(this).parent().remove();
        })
    }
    // console.log($("#to-do-list").children(), "list")

    // Xử lý sự kiện click vào mỗi li
    let lists = $('#to-do-list').children();
    for (let i = 0; i < lists.length; i++) {
        $(lists[i]).click(function() {
            //toggleClass: chuyển đổi qua lại giữa thêm và xóa class
            $(lists[i]).toggleClass('checked');
        });
    }
});
//refactor
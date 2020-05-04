function sanPhamLa(ten, hinhAnh, giaTruocKhiGiam, phamTranGiam, id) {
    var sanPham = new Object();
    sanPham.ten = ten;
    sanPham.hinhAnh = hinhAnh;
    sanPham.giaTruocKhiGiam = giaTruocKhiGiam;
    sanPham.phamTranGiam = phamTranGiam;
    
    if (id == null)
        sanPham.id = taoId();
    else
        sanPham.id = id;
    sanPham.giaSauKhiGiamLa = function () {

        var giaSauKhiGiam = this.giaTruocKhiGiam * (100 - this.phamTranGiam) / 100;
        return giaSauKhiGiam;
    }
    sanPham.fromJSONs = function (jsonDanhSachSanPham) {

        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = sanPhamLa(sanPham.ten, sanPham.hinhAnh, sanPham.giaTruocKhiGiam, sanPham.phamTranGiam);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;

    }


    return sanPham;
}
function chuyenDoiDanhSachSanPhamThanhHTML(danhSachSanPham) {
    var HTMLTong = '';
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var HTML = chuyenDoiTuongThanhHTMl(sanPham);
        HTMLTong = HTMLTong + HTML;
    }
    return HTMLTong;
}
function chuyenDoiTuongThanhHTMl(sanPham) {
    // console.log(sanPham1);
    //console.log(sanPham.phanTramGiam);
   var tensanpham = sanPham.ten;
    var hinhsanpham = sanPham.hinhAnh;
    var giatruockhigiamsanpham = sanPham.giaTruocKhiGiam;
    var phantramgiamsanpham = sanPham.phamTranGiam;
    var sanPham = sanPhamLa(tensanpham, hinhsanpham, giatruockhigiamsanpham, phantramgiamsanpham, sanPham.id);
    /*var sanPham = sanPhamLa(sanPham.ten, sanPham.hinhAnh, sanPham.giaTruocKhiGiam, sanPham.phamTranGiam, sanPham.id);*/



    var HTML = '';
    HTML = HTML + "<div class='san-pham'>";
    HTML = HTML + "      <div class='khung-pham-tram'>  ";
    HTML = HTML + "         <p class='pham-tram-giam-gia'>giảm " + sanPham.phamTranGiam + "%</p>";
    HTML = HTML + "      </div>  ";
    HTML = HTML + "      <div class='hinh-anh-san-pham' >";
    HTML = HTML + "         <img src='" + sanPham.hinhAnh + "'>";
    HTML = HTML + "      </div>";
    HTML = HTML + "      <h1 class='ten-san-pham'>" + sanPham.ten + "</h1>";
    HTML = HTML + "         <p class='gia-goc-san-pham'>" + sanPham.giaTruocKhiGiam + " đ</p>";
    HTML = HTML + "      <div class='khung-giam-gia'>  ";
    HTML = HTML + "         <p class='gia-sau-khi-giam-san-pham'>" + sanPham.giaSauKhiGiamLa() + " đ</p>";
    HTML = HTML + "      </div>  ";
    HTML = HTML + "    <button  onclick = 'onClickDuaVaoGioHang(" + sanPham.id + ")' class='btn'>Thêm vào giỏ</button>";
    HTML = HTML + "</div>";
    return HTML;
}
function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    /* Bước1: Load toàn bộ danh sách sản phẩm dưỡi local storage lên */
    var danhSachSanPham = layDanhSachSanPhamCuoiLocalStorage();
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if (sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }
    }
    /* Bước 2: Tìm ra đối tượng nào trong danh sách mà có id = idSanPham */
    /* Bước 3: Chuyển đổí tượng thành đối tượng đầy đủ */

    sanPham = sanPhamLa(sanPham.ten, sanPham.hinhAnh, sanPham.giaTruocKhiGiam, sanPham.phamTranGiam, sanPham.id);
    console.log(sanPham);
    return sanPham;
}
/* Mô tả: Lấy toàn bộ dnah sách sp dưuói local storage lên */
function layDanhSachSanPhamCuoiLocalStorage() {
    /* Bước 1: load json */
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');

    /* Bước 2: Chuyển json thành đối tượng */
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}
/* Mô tả: Tạo nahnh Đt gải hàng 
input: id snr pohẩm và số lươngnj sản phẩm
output: doi toưngnj giỏ hàng*/

function TaoDoiTuongItemGiohang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    console.log(itemGioHang);
    return itemGioHang;
}

/* Mô tả: lấy thong tin giỏ hàng mới dưới local storage
inout:
output: giỏ hàng = danh sachs item giỏ hàng */
function layGioHangTuLocalStorage() {
    var danhSachItemGioHang = new Array();
    var jsonDanhSachIteamGioHang = localStorage.getItem('gioHang');
    if (jsonDanhSachIteamGioHang != null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachIteamGioHang);

    return danhSachItemGioHang;
}

/* Mô tả: Thêm một sản phẩm vào giở hàng

nếu sản phẩm đẫ tồn tại trong giỏ hàng , thì tăng số lượng lên
nếu sản phẩm chưa tồn tại trong giỏ hàng, thì làm mới
input: id sản phẩm, số lượng sản phẩm 
output: giỏ hàng sau khi được thêm*/




/* Mô tả: Lưu trữ giỏ hàng xuống local storage
input: giỏ hàng- danh sách iteam giỏ hàng
output:  */

function luuGioHangXuongLocalStorage(danhSachItemGioHang) {
    /* Bước1: chuyển doóid tươngnj thành jsson */
    var jsonDanhSachIteamGioHang = JSON.stringify(danhSachItemGioHang);
    /* Bước 2: lưu json xuống local storage */
    localStorage.setItem('gioHang', jsonDanhSachIteamGioHang);

}
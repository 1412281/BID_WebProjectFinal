var products = [
		{
			"id_product": 1,
			"name": "Áo thun nữ",
			"type": "Thời trang",
			"price": 100000,
			"img": "../public/images/1.jpg",
			"author": "user1",
			"status": "Đang đấu giá"
		},
		{
			"id_product": 2,
			"name": "Guốc nữ",
			"type": "Thời trang",
			"price": 200000,
			"img": "../public/images/2.jpg",
			"author": "user2",
			"status": "Đã kết thúc"
		},
		{
			"id_product": 3,
			"name": "Điện thoại",
			"type": "Công nghệ",
			"price": 5000000,
			"img": "../public/images/3.jpg",
			"author": "user3",
			"status": "Đang đấu giá"
		},
		{
			"id_product": 4,
			"name": "Bộ dụng cụ bếp",
			"type": "Đồ gia dụng",
			"price": 300000,
			"img": "../public/images/4.jpg",
			"author": "user4",
			"status": "Đang đấu giá"
		},
		{
			"id_product": 5,
			"name": "Áo thun nữ",
			"type": "Thời trang",
			"price": 100000,
			"img": "../public/images/1.jpg",
			"author": "user5",
			"status": "Đang đấu giá"
		},
		{
			"id_product": 6,
			"name": "Áo thun nữ",
			"type": "Thời trang",
			"price": 100000,
			"img": "../public/images/2.jpg",
			"author": "user6",
			"status": "Đã kết thúc"
		},
		{
			"id_product": 7,
			"name": "Áo thun nữ",
			"type": "Thời trang",
			"price": 100000,
			"img": "../public/images/1.jpg",
			"author": "user1",
			"status": "Đang đấu giá"
		},
		{
			"id_product": 8,
			"name": "Máy xay sinh tố",
			"type": "Đồ gia dụng",
			"price": 100000,
			"img": "../public/images/4.jpg",
			"author": "user2",
			"status": "Đã kết thúc"
		},
		{
			"id_product": 9,
			"name": "Máy tính bảng",
			"type": "Công nghệ",
			"price": 100000,
			"img": "../public/images/3.jpg",
			"author": "user3",
			"status": "Đang đấu giá"
		},
		{
			"id_product": 10,
			"name": "Áo thun nữ",
			"type": "Thời trang",
			"price": 100000,
			"img": "../public/images/2.jpg",
			"author": "user4",
			"status": "Đá kết thúc"
		}
];

var output = document.getElementById('info_product');
var content = '<table class="table table-striped projects">';
content += '<thead><tr><th style="width: 1%">ID</th><th>Tên sản phẩm</th><th>Loại sản phẩm</th><th>Giá khởi điểm</th><th>Hình ảnh</th><th>Người đăng</th><th>Thao tác</th></tr></thead>';
content += '<tbody>';

for (var i=0; i<products.length; i++)
{
	content += "<tr>" + "<td>" + products[i].id_product + "</td>" +
               "<td>" + products[i].name + "</td>" + 
               "<td>" + products[i].type + "</td>" +
               "<td>" + products[i].price + "</td>" +  
               "<td>" + '<img src="'+ products[i].img +'" class="icon" alt="icon" width=100' + "</td>" +
               "<td>" + '<a href="#">' + products[i].author + '</a>' +"</td>";
	content += '<td><a href="product_detail.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>';
	content += '<a href="#" class="btn btn-success btn-xs"><i class="fa fa-pencil"></i> Duyệt </a>';
	content += '<a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a></td>';
	content += "</tr>";
}
content += '</tbody> </table>';
output.innerHTML = content;    
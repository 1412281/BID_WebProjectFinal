var accounts = [
		{
			"id_account": 1,
			"email": "nguyenvana@gmail.com",
			"phone_number": "0123456789",
			"date_create": "12/05/2017",
			"status": "Bị cấm"
		},
		{
			"id_account": 2,
			"email": "nguyenvanb@gmail.com",
			"phone_number": "0123456790",
			"date_create": "12/05/2017",
			"status": "Hoạt động"
		},
		{
			"id_account": 3,
			"email": "nguyenvand@gmail.com",
			"phone_number": "0123456791",
			"date_create": "15/05/2017",
			"status": "Hoạt động"
		},
		{
			"id_account": 4,
			"email": "nguyenvane@gmail.com",
			"phone_number": "0123456792",
			"date_create": "16/05/2017",
			"status": "Hoạt động"
		},
		{
			"id_account": 5,
			"email": "nguyenvanf@gmail.com",
			"phone_number": "0123456793",
			"date_create": "15/05/2017",
			"status": "Hoạt động"
		},
		{
			"id_account": 6,
			"email": "nguyenvand@gmail.com",
			"phone_number": "0123456794",
			"date_create": "15/05/2017",
			"status": "Hoạt động"
		},
		{
			"id_account": 7,
			"email": "nguyenvanf@gmail.com",
			"phone_number": "0123456795",
			"date_create": "12/05/2017",
			"status": "Hoạt động"
		},
		{
			"id_account": 8,
			"email": "nguyenvang@gmail.com",
			"phone_number": "0123456796",
			"date_create": "16/05/2017",
			"status": "Bị cấm"
		},
		{
			"id_account": 9,
			"email": "nguyenvanh@gmail.com",
			"phone_number": "0123456797",
			"date_create": "16/05/2017",
			"status": "Hoạt động"
		},
		{
			"id_account": 10,
			"email": "nguyenvani@gmail.com",
			"phone_number": "0123456798",
			"date_create": "16/05/2017",
			"status": "Hoạt động"
		}
];

var output = document.getElementById('info_account');
var content = '<table class="table table-striped projects">';
content += '<thead><tr><th style="width: 1%">ID</th><th style="width: 20%">Email</th><th>Số điện thoại</th><th>Ngày tạo</th><th>Trạng thái</th><th style="width: 20%">Thao tác</th></tr></thead>';
content += '<tbody>';

for (var i=0; i<accounts.length; i++)
{
	content += "<tr>" + "<td>" + accounts[i].id_account + "</td>" +
               "<td>" + accounts[i].email + "</td>" + 
               "<td>" + accounts[i].phone_number + 
               "</td>" + "<td>" + accounts[i].date_create + "</td>";
	if (accounts[i].status=="Hoạt động")
		content += '<td><button type="button" class="btn btn-success btn-xs">Hoạt động</button></td>';
	else content += '<td><button type="button" class="btn btn-default btn-xs">' + accounts[i].status + "</button></td>";

	content += '<td><a href="account_detail.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>';
	content += '<a href="account_edit.html" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>';
	content += '<a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a></td>';
	content += "</tr>";
}
content += '</tbody> </table>';
output.innerHTML = content;    
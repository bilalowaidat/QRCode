var lowerpart = "";
var firsttime = true;
var order = [];

function ShowConfiguration(){
	var upperpart = "<table style='width:100%; border-collapse: collapse; border-spacing: 0;'>";
	upperpart += "<tr><td style='width:100%; text-align:center; padding:0;'><img src='./Img/Logo.jpg' width='150' height='100' style='display:inline-block; vertical-align:middle;'></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Name + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Description + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Address + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Phone + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center; padding-top:10px;'>";
	upperpart += "<a href='" + Configuration.Whatsapp + "' target='_blank'><img src='./Img/Whatsapp.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.Facebook + "' target='_blank'><img src='./Img/Facebook.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.Instagram + "' target='_blank'><img src='./Img/Instagram.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.Tiktok + "' target='_blank'><img src='./Img/Tiktok.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.GoogleMaps + "' target='_blank'><img src='./Img/GoogleMaps.png' width=40 height=40 style='vertical-align:middle'></a>";
	upperpart += "</td></tr>";
	upperpart += "</table>";
	document.getElementById('Configuration').innerHTML=upperpart;
}

function ShowAllPOS() {
	ShowConfiguration();
	var CategoriesAndItemsLength = CategoriesAndItems.length;
	var t = "<table style='width:100%; border-collapse: collapse; border-spacing: 0;'>";
	for (var CategoryID = 0; CategoryID < CategoriesAndItemsLength; CategoryID++){
		var Items = CategoriesAndItems[CategoryID].Items;
		var ItemsLength = Items.length;
		t = t + "<tr><td colspan=4><p style='font-size:20px;font-weight:bold;color:Red;margin-top:30px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
		for (var i = 0; i < ItemsLength; i++){
			t = t + "<tr><td style='width:100%;font-size:16px;font-weight:bold;'>" + Items[i].Item + "</td><td style='font-size:16px;font-weight:bold;text-align:right;'>" + Items[i].Price + "</td><td style='font-size:16px;font-weight:bold;padding-left:10px;'>" + Items[i].Currency + "</td><td hidden style='width:1%;font-size:12px;color:Blue;'>" + Items[i].Barcode + "</td></tr>";
			if (Items[i].Description != "Description")
				t = t + "<tr><td style='font-size:14px;color:gray;'>" + Items[i].Description + "</td><td>&nbsp</td></tr>";
		}
	}
	t = t + "</table>";
	document.getElementById('tblCategoriesAndItems').innerHTML=t;
}

function ShowFilteredDescription(e,Search_Value) {
	var CategoriesAndItemsLength = CategoriesAndItems.length;
	var t = "<table style='width:100%; border-collapse: collapse; border-spacing: 0;'>";
	for (var CategoryID = 0; CategoryID < CategoriesAndItemsLength; CategoryID++){
		var Items = CategoriesAndItems[CategoryID].Items;
		var ItemsLength = Items.length;
		if (CategoriesAndItems[CategoryID].Category.toUpperCase().includes(Search_Value.toUpperCase())){
			t = t + "<tr><td colspan=4><p style='font-size:20px;font-weight:bold;color:Red;margin-top:30px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
			for (var i = 0; i < ItemsLength; i++){
				t = t + "<tr><td style='width:100%;font-size:16px;font-weight:bold;'>" + Items[i].Item + "</td><td style='font-size:16px;font-weight:bold;text-align:right;'>" + Items[i].Price + "</td><td style='font-size:16px;font-weight:bold;padding-left:10px;'>" + Items[i].Currency + "</td><td hidden style='width:1%;font-size:12px;color:Blue;'>" + Items[i].Barcode + "</td></tr>";
				if (Items[i].Description != "Description")
					t = t + "<tr><td style='font-size:14px;color:gray;'>" + Items[i].Description + "</td><td>&nbsp</td></tr>";
			}
		}
		else{
			var found_Search_Value = false;
			for (var i = 0; i < ItemsLength; i++)
				if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase()) || Items[i].Item.toUpperCase().includes(Search_Value.toUpperCase())){
					found_Search_Value = true;
					break;
				}
			if (found_Search_Value){
				t = t + "<tr><td colspan=4><p style='font-size:20px;font-weight:bold;color:Red;margin-top:30px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
				for (var i = 0; i < ItemsLength; i++)
					if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase()) || Items[i].Item.toUpperCase().includes(Search_Value.toUpperCase())){
						t = t + "<tr><td style='width:100%;font-size:16px;font-weight:bold;'>" + Items[i].Item + "</td><td style='font-size:16px;font-weight:bold;text-align:right;'>" + Items[i].Price + "</td><td style='font-size:16px;font-weight:bold;padding-left:10px;'>" + Items[i].Currency + "</td><td hidden style='width:1%;font-size:12px;color:Blue;'>" + Items[i].Barcode + "</td></tr>";
						if (Items[i].Description != "Description")
							t = t + "<tr><td style='font-size:14px;color:gray;'>" + Items[i].Description + "</td><td>&nbsp</td></tr>";
					}
			}
		}
	}
	t = t + "</table>";
	document.getElementById('tblCategoriesAndItems').innerHTML=t;
	if (e.keyCode == 13){
		document.getElementById('txtSearchDescription').value="";
		document.getElementById('txtSearchBarcode').value="";
	}
}

function ShowFilteredBarcode(e,Search_Value) {
	if (e.keyCode !=13)
		return;
	var CategoriesAndItemsLength = CategoriesAndItems.length;
	var t = "<table style='width:100%; border-collapse: collapse; border-spacing: 0;'>";
	for (var CategoryID = 0; CategoryID < CategoriesAndItemsLength; CategoryID++){
		var Items = CategoriesAndItems[CategoryID].Items;
		var ItemsLength = Items.length;
		var found_Search_Value = false;
		for (var i = 0; i < ItemsLength; i++)
			if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase())){
				found_Search_Value = true;
				break;
			}
			if (found_Search_Value){
				t = t + "<tr><td colspan=4><p style='font-size:20px;font-weight:bold;color:Red;margin-top:30px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
				for (var i = 0; i < ItemsLength; i++)
					if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase())){
						t = t + "<tr><td style='width:100%;font-size:16px;font-weight:bold;'>" + Items[i].Item + "</td><td style='font-size:16px;font-weight:bold;text-align:right;'>" + Items[i].Price + "</td><td style='font-size:16px;font-weight:bold;padding-left:10px;'>" + Items[i].Currency + "</td><td hidden style='width:1%;font-size:12px;color:Blue;'>" + Items[i].Barcode + "</td></tr>";
						if (Items[i].Description != "Description")
							t = t + "<tr><td style='font-size:14px;color:gray;'>" + Items[i].Description + "</td><td>&nbsp</td></tr>";
					}
			}
	}
	t = t + "</table>";
	document.getElementById('tblCategoriesAndItems').innerHTML=t;
	document.getElementById('txtSearchDescription').value="";
	document.getElementById('txtSearchBarcode').value="";
}

function ToggleCart() {
    var upper = document.getElementById('upperpart');
    var lower = document.getElementById('lowerpart');
    
    // Toggle the CSS classes
    upper.classList.toggle('expanded-upper');
    lower.classList.toggle('minimized-lower');
}

function ShowAllRestaurant() {
	if (!firsttime)
		var wasMinimized = document.getElementById('lowerpart').classList.contains('minimized-lower');
    var CategoriesAndItemsLength = CategoriesAndItems.length;
	var upperpart = "<div id='upperpart' style='flex: 0 0 65%; height: 65%; overflow-y: auto; border-bottom: 2px solid #ddd; box-sizing: border-box;'>";
    upperpart += "<div style='flex: 1; overflow-y: auto; padding: 10px;'>";
	
	// Show Configuration
	upperpart += "<table style='width:100%; border-collapse: collapse; border-spacing: 0;'>";
	upperpart += "<tr><td style='width:100%; text-align:center; padding:0;'><img src='./Img/Logo.jpg' width='150' height='100' style='display:inline-block; vertical-align:middle;'></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Name + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Description + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Address + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center;'><div style='font-size:18px; font-weight:bold; margin:0; padding:2px 0; line-height:1.2;'>" + Configuration.Phone + "</div></td></tr>";
	upperpart += "<tr><td style='width:100%; text-align:center; padding-top:10px;'>";
	upperpart += "<a href='" + Configuration.Whatsapp + "' target='_blank'><img src='./Img/Whatsapp.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.Facebook + "' target='_blank'><img src='./Img/Facebook.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.Instagram + "' target='_blank'><img src='./Img/Instagram.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.Tiktok + "' target='_blank'><img src='./Img/Tiktok.png' width=40 height=40 style='vertical-align:middle'></a>&nbsp;&nbsp;&nbsp;";
	upperpart += "<a href='" + Configuration.GoogleMaps + "' target='_blank'><img src='./Img/GoogleMaps.png' width=40 height=40 style='vertical-align:middle'></a>";
	upperpart += "</td></tr>";
	upperpart += "</table>";

	// Show Categories
    upperpart += "<table style='width:100%; border-collapse: collapse;margin-top:30px;'>";
    for (var i = 0; i < CategoriesAndItemsLength; i = i + 2) {
        if (i + 1 < CategoriesAndItemsLength) {
            upperpart += "<tr>";
            upperpart += "<td style='width:45%;text-align:center;'><img id='" + i + "' src='" + CategoriesAndItems[i].CategoryOnlinePicture + "' width='100%' onclick='ShowItems(this.id)'></td>";
            upperpart += "<td style='width:10%;'>&nbsp;</td>";
            upperpart += "<td style='width:45%;text-align:center;'><img id='" + (i + 1) + "' src='" + CategoriesAndItems[i+1].CategoryOnlinePicture + "' width='100%' onclick='ShowItems(this.id)'></td>";
            upperpart += "</tr>";
            
            upperpart += "<tr>";
            upperpart += "<td style='text-align:center;'><div style='font-size:20px;font-weight:bold;cursor:pointer' id='" + i + "' onclick='ShowItems(this.id)'>" + CategoriesAndItems[i].Category + "</div></td>";
            upperpart += "<td>&nbsp;</td>";
            upperpart += "<td style='text-align:center;'><div style='font-size:20px;font-weight:bold;cursor:pointer' id='" + (i + 1) + "' onclick='ShowItems(this.id)'>" + CategoriesAndItems[i+1].Category + "</div></td>";
            upperpart += "</tr>";
            upperpart += "<tr><td colspan='3'>&nbsp;</td></tr>";
        } else {
            upperpart += "<tr>";
            upperpart += "<td style='width:45%;text-align:center;'><img id='" + i + "' src='" + CategoriesAndItems[i].CategoryOnlinePicture + "' width='100%' onclick='ShowItems(this.id)'></td>";
            upperpart += "<td>&nbsp;</td><td>&nbsp;</td>";
            upperpart += "</tr>";
            upperpart += "<tr>";
            upperpart += "<td style='text-align:center;'><div style='font-size:20px;font-weight:bold;cursor:pointer' id='" + i + "' onclick='ShowItems(this.id)'>" + CategoriesAndItems[i].Category + "</div></td>";
            upperpart += "</tr>";
        }
    }
    upperpart += "</table>";
    upperpart += "</div>";
	upperpart += "</div>";

	// Show the current order
	lowerpart = "<div id='lowerpart' style='flex: 0 0 35%; height: 35%; display: flex; flex-direction: column; background: #f9f9f9; box-sizing: border-box; overflow: hidden; border-top: 2px solid #ccc;'>";
	lowerpart += "<div onclick='ToggleCart()' style='width:100%; height:30px; background:#eee; display:flex; justify-content:center; align-items:center; cursor:pointer; border-bottom:1px solid #ddd;'>";
	lowerpart += "<div style='width:40px; height:5px; background:#999; border-radius:10px;'></div>";
	lowerpart += "</div>";
	lowerpart += "<div style='flex: 1; overflow-y: auto; padding: 0px 10px 10px 10px;'>";
	lowerpart += "<table id='tblOrderInfo' style='width:100%; border-collapse: separate; border-spacing: 0 5px;'><tbody></tbody></table>";
	lowerpart += "</div>";
	lowerpart += "<div style='padding: 10px; border-top: 1px solid #ddd; background: white; text-align: center; flex-shrink: 0;'>";
	lowerpart += "<img src='./Img/ProcessOrder.png' width=80 height=80 style='cursor:pointer;' onclick='ProcessOrder()'>";
	lowerpart += "</div>";
	lowerpart += "</div>";

	document.getElementById('maindiv').innerHTML = upperpart + lowerpart;
	RenderOrderTable();
	if (firsttime) {
		firsttime = false;
		document.getElementById('upperpart').classList.add('expanded-upper');
        document.getElementById('lowerpart').classList.add('minimized-lower');
	}
	else if (wasMinimized) {
        document.getElementById('upperpart').classList.add('expanded-upper');
        document.getElementById('lowerpart').classList.add('minimized-lower');
    } else {
        document.getElementById('upperpart').classList.remove('expanded-upper');
        document.getElementById('lowerpart').classList.remove('minimized-lower');
    }
}

function ShowItems(CategoryID) {
	var wasMinimized = document.getElementById('lowerpart').classList.contains('minimized-lower');
    var Items = CategoriesAndItems[CategoryID].Items;
    var upperpart2 = "<div id='upperpart' style='flex: 0 0 65%; height: 65%; overflow-y: auto; border-bottom: 2px solid #ddd; box-sizing: border-box;'>";
	upperpart2 += "<div style='flex: 1; overflow-y: auto; padding: 10px;'>";
	upperpart2 += "<table style='width:100%;border-collapse: collapse; border-spacing: 0;'><tr><td style='text-align:left;'><p style='font-size:26px;font-weight:bold;color:Red;margin:0;'>" + CategoriesAndItems[CategoryID].Category + "</p></td><td style='text-align:right;'><img src='./Img/Back.png' width=40 height=40 style='cursor:pointer;' onclick='BackButton()'></td></tr></table>";
	upperpart2 += "<table style='width:100%;border-collapse: collapse; border-spacing: 0;'>"
	for (var i = 0; i < Items.length; i++) {
		var safeName = Items[i].Item.replace(/'/g, "\\'");
		var safePrice = (Items[i].Price + " " + Items[i].Currency).replace(/'/g, "\\'");
		upperpart2 += "<tr><td style='width:150px; height:150px; border:3px solid #ccc; padding:0; background:#f8f8f8; vertical-align:middle;'><img src='" + Items[i].ItemOnlinePicture + "' style='width: 100%; height: 100%;object-fit: cover;display: block;'></td><td style='width:calc(100% - 150px); height:150px; border:3px solid #ccc; padding:0px 0px 0px 10px; vertical-align:top; position:relative;'><div style='height:105px; overflow-y:auto; scrollbar-width:none; -ms-overflow-style:none;'>" + (Items[i].Recommended == "False" ? "" : "<div style='font-size:16px; color:Red; font-weight:bold; text-align:center; width:100%;'>&#9733; Popular &#9733;</div>") + "<div style='font-size:16px; font-weight:bold; line-height:1.2;padding:5px 0px 0px 0px;'>" + safeName + "</div><div style='color:gray; font-size:14px; line-height:1.2;padding:5px 0px 0px 0px'>" + Items[i].Description + "</div></div><div style='position:absolute; bottom:10px; left:10px; right:10px; display:flex; justify-content:space-between; align-items:center; background:white;'><span style='color:green; font-size:16px; font-weight:bold;'>" + safePrice + "</span><button onclick=\"AddItem('" + safeName + "', '" + safePrice + "')\" style='cursor:pointer; background-color:#28a745; color:white; border:none; border-radius:50%; width:35px; height:35px; font-size:22px; font-weight:bold; display:flex; align-items:center; justify-content:center; line-height:1; box-shadow: 0 2px 4px rgba(0,0,0,0.1);'>+</button></div></td></tr>";
	}
    upperpart2 += "</table>";
	upperpart2 += "</div>";
	upperpart2 += "</div>";
	document.getElementById('maindiv').innerHTML = upperpart2 + lowerpart;
	RenderOrderTable();
	if (wasMinimized) {
        document.getElementById('upperpart').classList.add('expanded-upper');
        document.getElementById('lowerpart').classList.add('minimized-lower');
    } else {
        document.getElementById('upperpart').classList.remove('expanded-upper');
        document.getElementById('lowerpart').classList.remove('minimized-lower');
    }
    scroll(0,0);
}

function AddItem(name, priceWithCurrency) {
	order.push({ name: name, price: priceWithCurrency });
	var lower = document.getElementById('lowerpart');
    if (lower && lower.classList.contains('minimized-lower')) {
        ToggleCart();
    }
    RenderOrderTable();
}

function RemoveItem(index) {
    if (confirm("Remove " + order[index].name + " from order?")) {
        order.splice(index, 1);
        RenderOrderTable();
    }
}

function RenderOrderTable() {
    const table = document.getElementById('tblOrderInfo');
    if (!table) return;

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ""; 

    for (var i = order.length - 1; i >= 0; i--) {
        const item = order[i];
        const row = tbody.insertRow(-1);

		let index = i; 
		row.onclick = function() {
			RemoveItem(index);
		};

        var cell1 = row.insertCell(0);
        cell1.style.width = "100%"; 
        cell1.style.fontWeight = "bold";
        cell1.style.fontSize = "16px";
        cell1.innerHTML = item.name;
        
        var cell2 = row.insertCell(1);
        cell2.style.textAlign = "right";
        cell2.style.fontWeight = "bold";
        cell2.style.fontSize = "16px";
        cell2.style.whiteSpace = "nowrap";
        cell2.style.paddingLeft = "20px"; 
        cell2.style.paddingRight = "5px";
        cell2.innerHTML = item.price;
    }
}

function ProcessOrder() {
    if (order.length === 0) {
        alert("No items added");
        return;
    }

    if (confirm("Proceed with Order?")) {
        var CustomerName = prompt("Please enter your name:");
        if (!CustomerName || CustomerName.trim() === "") {
            alert("Name is required.");
            return;
        }

        var CustomerAddress = prompt("Please enter your address:");
        if (!CustomerAddress || CustomerAddress.trim() === "") {
            alert("Address is required.");
            return;
        }

        var itemsList = order.map(function(item) {
            return item.name;
        });

        var orderText = "Name: " + CustomerName + "\n" + "Address: " + CustomerAddress + "\n\n" + itemsList.join("\n");
        var link = document.createElement('a');
        link.href = Configuration.Whatsapp + "?text=" + encodeURIComponent(orderText);
        link.click();
    }
}

function BackButton() {
    ShowAllRestaurant();
    scroll(0,0);
}


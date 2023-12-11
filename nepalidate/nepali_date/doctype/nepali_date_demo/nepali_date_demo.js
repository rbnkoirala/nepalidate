frappe.ui.form.on("Nepali Date Demo", {
    refresh(frm) {
        add_nepali_date_picker(frm, "nepali_date");   // if you dont want to add nepali date only
        add_nepali_date_picker(frm, "nepali_date_convert", "english_date_convert");   //  if you want to add nepali date and convert to english date      
        add_nepali_date_picker(frm, "nepali_date_time_convert", "english_datetime_convert");  // convert in time field
        add_nepali_date_picker(frm, "nepali_date_convert_one", "english_date_convert_one"); 
       
        
    },
    english_date_convert(frm) {  
        frappe.model.set_value(frm.doctype, frm.docname, "nepali_date_convert", NepaliFunctions.AD2BS(frm.doc.english_date_convert.split(" ")[0], "YYYY-MM-DD", "YYYY-MM-DD"));
    },
    english_datetime_convert(frm) {
        frappe.model.set_value(frm.doctype, frm.docname, "nepali_date_convert", NepaliFunctions.AD2BS(frm.doc.english_datetime_convert.split(" ")[0], "YYYY-MM-DD", "YYYY-MM-DD"));
    },    
    english_date_convert_one(frm) { 
        frappe.model.set_value(frm.doctype, frm.docname, "nepali_date_convert_one", NepaliFunctions.AD2BS(frm.doc.english_date_convert_one.split(" ")[0], "YYYY-MM-DD", "YYYY-MM-DD"));
    },
    english_datetime_convert_one(frm) {
        frappe.model.set_value(frm.doctype, frm.docname, "nepali_date_convert_one", NepaliFunctions.AD2BS(frm.doc.english_datetime_convert_one.split(" ")[0], "YYYY-MM-DD", "YYYY-MM-DD"));
    }
});

frappe.ui.form.on("Nepali Date Demo Child", "english_date_child", function(frm, cdt, cdn) {    
    frappe.model.set_value(cdt, cdn, "nepali_date_child", NepaliFunctions.AD2BS(locals[cdt][cdn].english_date_child, "YYYY-MM-DD", "YYYY-MM-DD"));   
});

frappe.ui.form.on("Nepali Date Demo Child", "nepali_date_child", function(frm, cdt, cdn) {
    frappe.model.set_value(cdt, cdn, "english_date_child", NepaliFunctions.BS2AD(locals[cdt][cdn].nepali_date_child, "YYYY-MM-DD", "YYYY-MM-DD"));   
});



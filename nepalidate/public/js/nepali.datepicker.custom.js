function add_nepali_date_picker(frmField, nepali_date_field) {
    if (typeof $.fn.nepaliDatePicker !== 'undefined') {
        frmField.fields_dict[nepali_date_field].df.fieldtype = "Data";
        $(frmField.fields_dict[nepali_date_field].input).nepaliDatePicker({
            ndpYear: true,
            ndpMonth: true,
            ndpYearCount: 10
        });     

        frmField.fields_dict[nepali_date_field].df.placeholder = "Enter your data here"; 
        frmField.fields_dict[nepali_date_field].df.max_length = 10;
        frmField.fields_dict[nepali_date_field].refresh();        
    }
}
ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4034").setExtent([-2.992190, -5.381291, 31.823315, 13.465685]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_dptmts_EST_1 = new ol.format.GeoJSON();
var features_dptmts_EST_1 = format_dptmts_EST_1.readFeatures(json_dptmts_EST_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4034'});
var jsonSource_dptmts_EST_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dptmts_EST_1.addFeatures(features_dptmts_EST_1);
var lyr_dptmts_EST_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dptmts_EST_1, 
                style: style_dptmts_EST_1,
                interactive: true,
                title: '<img src="styles/legend/dptmts_EST_1.png" /> dptmts_EST'
            });

lyr_OSMStandard_0.setVisible(true);lyr_dptmts_EST_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_dptmts_EST_1];
lyr_dptmts_EST_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_region': 'FID_region', 'type_': 'type_', 'desc_type': 'desc_type', 'nom_reg': 'nom_reg', 'code_reg': 'code_reg', 'population': 'population', 'sup_adm_ha': 'sup_adm_ha', 'sup_sig_ha': 'sup_sig_ha', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'created_us': 'created_us', 'created_da': 'created_da', 'FID_depart': 'FID_depart', 'type1': 'type1', 'desc_type_': 'desc_type_', 'nom_dep': 'nom_dep', 'nom_reg_1': 'nom_reg_1', 'code_dep': 'code_dep', 'populati_1': 'populati_1', 'sup_adm__1': 'sup_adm__1', 'last_edi_2': 'last_edi_2', 'sup_sig__1': 'sup_sig__1', 'created__1': 'created__1', 'created__2': 'created__2', 'last_edi_3': 'last_edi_3', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_dptmts_EST_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_region': 'TextEdit', 'type_': 'TextEdit', 'desc_type': 'TextEdit', 'nom_reg': 'TextEdit', 'code_reg': 'TextEdit', 'population': 'TextEdit', 'sup_adm_ha': 'TextEdit', 'sup_sig_ha': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'FID_depart': 'TextEdit', 'type1': 'TextEdit', 'desc_type_': 'TextEdit', 'nom_dep': 'TextEdit', 'nom_reg_1': 'TextEdit', 'code_dep': 'TextEdit', 'populati_1': 'TextEdit', 'sup_adm__1': 'TextEdit', 'last_edi_2': 'DateTime', 'sup_sig__1': 'TextEdit', 'created__1': 'TextEdit', 'created__2': 'DateTime', 'last_edi_3': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_dptmts_EST_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_region': 'no label', 'type_': 'no label', 'desc_type': 'no label', 'nom_reg': 'no label', 'code_reg': 'no label', 'population': 'no label', 'sup_adm_ha': 'no label', 'sup_sig_ha': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'FID_depart': 'no label', 'type1': 'no label', 'desc_type_': 'no label', 'nom_dep': 'inline label', 'nom_reg_1': 'no label', 'code_dep': 'no label', 'populati_1': 'no label', 'sup_adm__1': 'no label', 'last_edi_2': 'no label', 'sup_sig__1': 'no label', 'created__1': 'no label', 'created__2': 'no label', 'last_edi_3': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_dptmts_EST_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
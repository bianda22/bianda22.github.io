ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-2.719501, -1.810660, 30.461068, 16.151262]);
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
var format_limites_1 = new ol.format.GeoJSON();
var features_limites_1 = format_limites_1.readFeatures(json_limites_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_limites_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_1.addFeatures(features_limites_1);
var lyr_limites_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limites_1, 
                style: style_limites_1,
                interactive: true,
                title: '<img src="styles/legend/limites_1.png" /> limites'
            });
var format_permanent_2 = new ol.format.GeoJSON();
var features_permanent_2 = format_permanent_2.readFeatures(json_permanent_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_permanent_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_permanent_2.addFeatures(features_permanent_2);
var lyr_permanent_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_permanent_2, 
                style: style_permanent_2,
                interactive: true,
                title: '<img src="styles/legend/permanent_2.png" /> permanent'
            });

lyr_OSMStandard_0.setVisible(true);lyr_limites_1.setVisible(true);lyr_permanent_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_limites_1,lyr_permanent_2];
lyr_limites_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SCE_GEO': 'SCE_GEO', 'SCE_SEM': 'SCE_SEM', 'DATE_': 'DATE_', 'ORIGINE': 'ORIGINE', 'NOM': 'NOM', 'SUPERFICIE': 'SUPERFICIE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAME': 'NAME', });
lyr_permanent_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'INDICATIF': 'INDICATIF', 'AFF_CODE': 'AFF_CODE', 'TOPONYME': 'TOPONYME', 'N_CONCESSI': 'N_CONCESSI', 'SUP_SIG': 'SUP_SIG', 'BUREAU_CER': 'BUREAU_CER', 'WOOD_VOL06': 'WOOD_VOL06', 'WOOD_VOL07': 'WOOD_VOL07', 'WOOD_VOL08': 'WOOD_VOL08', 'RFA_HA': 'RFA_HA', 'VALIDITE': 'VALIDITE', 'ATTRIBUTAI': 'ATTRIBUTAI', 'DATE_ATTRI': 'DATE_ATTRI', 'EXPLOITANT': 'EXPLOITANT', 'GROUPE_PAR': 'GROUPE_PAR', 'PROVINCE': 'PROVINCE', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'SUP_PROVIS': 'SUP_PROVIS', 'CLASSEMENT': 'CLASSEMENT', 'DATE_CLASS': 'DATE_CLASS', 'REF_CLASSE': 'REF_CLASSE', 'SUP_DEFINI': 'SUP_DEFINI', 'PLAN_AMGMT': 'PLAN_AMGMT', 'DATE_APPRO': 'DATE_APPRO', 'REF_APPRO': 'REF_APPRO', 'Observatio': 'Observatio', 'Certif_FM': 'Certif_FM', 'Certif_CW': 'Certif_CW', 'Certif_leg': 'Certif_leg', 'Date_FM': 'Date_FM', 'Date_CW': 'Date_CW', 'Date_Legal': 'Date_Legal', 'STATUT': 'STATUT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_limites_1.set('fieldImages', {'OBJECTID': 'Range', 'SCE_GEO': 'TextEdit', 'SCE_SEM': 'TextEdit', 'DATE_': 'DateTime', 'ORIGINE': 'TextEdit', 'NOM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAME': 'TextEdit', });
lyr_permanent_2.set('fieldImages', {'OBJECTID_1': 'Range', 'INDICATIF': 'TextEdit', 'AFF_CODE': 'TextEdit', 'TOPONYME': 'TextEdit', 'N_CONCESSI': 'TextEdit', 'SUP_SIG': 'TextEdit', 'BUREAU_CER': 'TextEdit', 'WOOD_VOL06': 'TextEdit', 'WOOD_VOL07': 'TextEdit', 'WOOD_VOL08': 'TextEdit', 'RFA_HA': 'TextEdit', 'VALIDITE': 'TextEdit', 'ATTRIBUTAI': 'TextEdit', 'DATE_ATTRI': 'TextEdit', 'EXPLOITANT': 'TextEdit', 'GROUPE_PAR': 'TextEdit', 'PROVINCE': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'SUP_PROVIS': 'TextEdit', 'CLASSEMENT': 'TextEdit', 'DATE_CLASS': 'TextEdit', 'REF_CLASSE': 'TextEdit', 'SUP_DEFINI': 'TextEdit', 'PLAN_AMGMT': 'TextEdit', 'DATE_APPRO': 'TextEdit', 'REF_APPRO': 'TextEdit', 'Observatio': 'TextEdit', 'Certif_FM': 'TextEdit', 'Certif_CW': 'TextEdit', 'Certif_leg': 'TextEdit', 'Date_FM': 'TextEdit', 'Date_CW': 'TextEdit', 'Date_Legal': 'TextEdit', 'STATUT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_limites_1.set('fieldLabels', {'OBJECTID': 'no label', 'SCE_GEO': 'no label', 'SCE_SEM': 'no label', 'DATE_': 'no label', 'ORIGINE': 'no label', 'NOM': 'inline label', 'SUPERFICIE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAME': 'no label', });
lyr_permanent_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'INDICATIF': 'no label', 'AFF_CODE': 'no label', 'TOPONYME': 'no label', 'N_CONCESSI': 'no label', 'SUP_SIG': 'no label', 'BUREAU_CER': 'inline label', 'WOOD_VOL06': 'no label', 'WOOD_VOL07': 'no label', 'WOOD_VOL08': 'no label', 'RFA_HA': 'no label', 'VALIDITE': 'no label', 'ATTRIBUTAI': 'no label', 'DATE_ATTRI': 'no label', 'EXPLOITANT': 'no label', 'GROUPE_PAR': 'no label', 'PROVINCE': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'SUP_PROVIS': 'no label', 'CLASSEMENT': 'no label', 'DATE_CLASS': 'no label', 'REF_CLASSE': 'no label', 'SUP_DEFINI': 'no label', 'PLAN_AMGMT': 'no label', 'DATE_APPRO': 'no label', 'REF_APPRO': 'no label', 'Observatio': 'no label', 'Certif_FM': 'no label', 'Certif_CW': 'no label', 'Certif_leg': 'no label', 'Date_FM': 'no label', 'Date_CW': 'no label', 'Date_Legal': 'no label', 'STATUT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_permanent_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
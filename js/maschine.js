window.addEventListener("load", function(){
    const formel_salz = [
        "Ag⁺", "Al³⁺", "Ba²⁺", "Be²⁺", "Bi²⁺",
        "Ca²⁺", "Cd²⁺", "Ce³⁺", "Co²⁺", "Co³⁺",
        "Cr²⁺", "Cs⁺", "Cu⁺", "Cu²⁺", "Fe²⁺",
        "Fe³⁺", "Ga³⁺", "Hg⁺", "Hg²⁺", "In³⁺",
        "K⁺", "Li⁺", "Mg²⁺", "Mn²⁺", "Na⁺",
        "NH₄⁺", "Ni²⁺", "Pb²⁺", "Rb²⁺", "Sr²⁺",
        "Th⁴⁺", "TI³⁺", "Zn²⁺"
    ];
    const formel_metall = [
        "Br⁻", "BrO₃⁻",  "BrO⁻", "Cl⁻", "ClO₃⁻",
        "ClO⁻", "CiO₄⁻", "CrO₄²⁻", "Cr₂O₂²⁻", "F⁻",
        "I⁻", "IO₃⁻", "CN⁻", "Co₃²⁻", "HCO₃⁻",
        "CH₃COO⁻", "C₂O₄²⁻", "C₆H₅O₇³⁻", "MnO₄⁻", "Po₄³⁻",
        "HPO₄²⁻", "H₂PO₄⁻", "S₂O₃²⁻", "S²⁻", "HS⁻",
        "SO₄²⁻", "HSO₄⁻", "SO²⁻", "HSO₃⁻", "S₂O₈²⁻",
        "SCN⁻", "No₃⁻", "NO₂⁻"
    ];
    const name_salz = [
        "Silber", "Aluminium", "Barium", "Beryllium", "Bismut",
        "Calcium", "Cadimium", "Cer", "Cobalt(II)", "Cobalt(III)",
        "Chrom", "Caesium", "Kupfer(I)", "Kupfer(II)", "Eisen(II)",
        "Eisen(III)", "Gallium", "Quecksilber(I)", "Quecksilber(II)", "Indium",
        "Kalium", "Lithium", "Magnesium", "Mangan", "Natrium",
        "Ammonium", "Nickel", "Blei", "Rubidium", "Strontium",
        "Thorium", "Thallium", "Zink"
    ];
    const name_metall = [
        "bromid", "bromat", "hypobromit", "clorid", "clorat",
        "hypochlorid", "perchlorat", "chromat", "dichromat", "fluorid",
        "iodid", "iodat", "cyanid", "carbonat", "hydrogencarbonat",
        "acetat", "oxalat", "citrat", "permanganat", "phosphat",
        "hydrogenphosphat", "dihydrogenphosphat", "thiosulfat", "sulfid", "hydrogensulfid",
        "sulfat", "hydrogensulfat", "sulfit", "hydrogensulfit", "peroxiddisulfat",
        "thiocyanat", "nitrat", "nitrit"
    ];

    const formel_salz_select = document.getElementById("formel_salz");
    const formel_metall_select = document.getElementById("formel_metall");
    const name_salz_select = document.getElementById("name_salz");
    const name_metall_select = document.getElementById("name_metall");

    populate_select(formel_salz_select, formel_salz);
    populate_select(formel_metall_select, formel_metall);
    populate_select(name_salz_select, name_salz);
    populate_select(name_metall_select, name_metall);
    
    
    function populate_select(elem, options){
        var res = "";
        var i = 0;
        for(option of options){
            res += "<option value='" + i.toString() + "'>" + option + "</option>";
            i++;
        }
        elem.innerHTML = res;
    }
});
function calculate(elem){
    const formel_salz_select = document.getElementById("formel_salz");
    const formel_metall_select = document.getElementById("formel_metall");
    const name_salz_select = document.getElementById("name_salz");
    const name_metall_select = document.getElementById("name_metall");

    if(elem == "formel_salz"){
        var val = formel_salz_select.value;
        name_salz_select.value = val.toString();
    }
    else if(elem == "formel_metall"){
        var val = formel_metall_select.value;
        name_metall_select.value = val.toString();
    }
    else if(elem == "name_salz"){
        var val = name_salz_select.value;
        formel_salz_select.value = val.toString();
    }
    else if(elem == "name_metall"){
        var val = name_metall_select.value;
        formel_metall_select.value = val.toString();
    }
}
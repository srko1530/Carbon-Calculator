/*Algortithm for Food Based Production
1) pass in value to select Gen Category of Food: (Proteins, Fruits, Vegtables, Grains, Dairy, Confections, Coffee)
    -Has the user ate any of these types of food
2)Select the measurement metric
3) enter the corresponding measurement metric
4) convert the metric to kg
5) multiply food type by kg's to give carbon tons 
*/

function foodBasedCarbon(categoryFood, foodOption, measurementSelect, amntMetric)
{
    switch(categoryFood)
    {
        case "PROTEIN":
            switch(foodOption)
            {
                //Beef
                case "BEEF":
                    //Steak 0.4 kg PER
                    switch(measurementSelect)
                    {
                        case 1:
                        
                            Metric = 0.226796;
                            carbonKgProduct = Metric * 100;
                            carbonTon = carbonKgProduct / 1000;
                            return carbonTon * amntMetric;
                        break;
                        //Burger Patty 0.0850486 kg PER
                        case 2:
                        
                            Metric = 0.0850486;
                            carbonKgProduct = Metric * 100;
                            carbonTon = carbonKgProduct / 1000;
                            return carbonTon * amntMetric;
                        break;
                        //Ground Beef Ounces O.02834 kg PER
                        case 3:
                            Metric = 0.02834;
                            carbonKgProduct = Metric * 100;
                            carbonTon = carbonKgProduct / 1000;
                            return carbonTon * amntMetric;
                        break;
                        default:
                    }
                break;
                //Prawns
                case "PRAWNS":
                    if(measurementSelect == 1)
                    {
                        //Cups of Prawns 0.0850486 kg PER
                        Metric =  0.0850486;
                        carbonKgProduct = Metric * 27;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Chicken
                case "CHICKEN":
                
                    if(measurementSelect == 1)
                    {
                        //Pieces of Chicken 0.0850486 kg PER
                        Metric = 0.0850486;
                        carbonKgProduct = Metric * 10;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Fish
                case "FISH":
                
                    if(measurementSelect == 1)
                    {
                        //Pieces of Fish 0.1275728 kg PER
                        Metric = 0.1275728;
                        carbonKgProduct = Metric * 14;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Eggs
                case "EGGS":
                
                    if(measurementSelect == 1)
                    {
                        //Egg 0.0850486 kg PER
                        Metric = 0.0850486;
                        carbonKgProduct = Metric * 5;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Tofu
                case "TOFU":
                
                    if(measurementSelect == 1)
                    {
                        //Package of Tofu 0.170097 kg PER
                        Metric = 0.170097;
                        carbonKgProduct = Metric * 3;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Beans
                case "BEANS":
                    if(measurementSelect == 1)
                    {
                        //Can of Beans 0.056699 kg PER
                        Metric = 0.056699;
                        carbonKgProduct = Metric * 2;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Nuts
                case "NUTS":
                    if(measurementSelect == 1)
                    {
                        //Cups of Nuts  0.0425243 kg PER
                        Metric = 0.0425243;
                        carbonKgProduct = Metric * 0.4;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                default:
            }
        case "FRUITS":
            switch(foodOption)
            {        
                //Avocado
                case "AVOCADO":
                    if(measurementSelect == 1)
                    {
                        //Avacado 0.056699 kg PER
                        Metric = 0.056699;
                        carbonKgProduct = Metric * 2.5;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                    break;
                //Tomato
                case "TOMATO":
                    if(measurementSelect == 1)
                    {
                        //Tomato 0.226796 kg PER
                        Metric = 0.226796;
                        carbonKgProduct = Metric * 2;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                    break;
                //Banana
                case "BANANA":
                    if(measurementSelect == 1)
                    {
                        //Banana  0.226796 kg PER
                        Metric =  0.226796;
                        carbonKgProduct = Metric * 1;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                default:
            }
            break;
        case "VEGETABLES":
            switch(foodOption)
            {
                //Corn
                case "CORN":
                    if(measurementSelect == 1)
                    {
                        //Corn  0.113398 kg PER
                        Metric =  0.113398;
                        carbonKgProduct = Metric * 2;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Peas
                case "PEAS":
                    if(measurementSelect == 1)
                    {
                        //PEAS  0.113398 kg PER
                        Metric = 0.113398;
                        carbonKgProduct = Metric * 1;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                //Potato
                case "POTATO":
                    if(measurementSelect == 1)
                    {
                        //Potato  0.141748 kg PER
                        Metric = 0.141748;
                        carbonKgProduct = Metric * 0.5;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                break;
                default:
            }   
            break;
        case "GRAINS": 
            if(foodOption == "RICE")
            {
                if(measurementSelect == 1)
                {
                    // Bowls of RICE 0.226796 kg PER
                    Metric = 0.226796;
                    carbonKgProduct = Metric * 4.5;
                    carbonTon = carbonKgProduct / 1000;
                    return carbonTon * amntMetric;
                }
            } 
            break;
        case "DAIRY":
            switch(foodOption)
            {
                //Milk
                case "MILK":
                    if(measurementSelect == 1)
                    {
                        // Cup of Milk 0.226796 kg PER
                        Metric = 0.226796;
                        carbonKgProduct = Metric * 33;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                    break;
                //Cheese
                case "CHEESE":
                    if(measurementSelect == 1)
                    {
                        //Slices  0.0283495 kg PER
                        Metric = 0.0283495
                        carbonKgProduct = Metric * 24;
                        carbonTon = carbonKgProduct / 1000;
                        return carbonTon * amntMetric;
                    }
                    break;
                default:
            }   
            break;
        case "CONFECTIONS": 
            if(foodOption == "CHOCOLATE")
            {
                if(measurementSelect == 1)
                {
                    //Chocolate 0.0283495 kg PER
                    Metric = 0.0283495;
                    carbonKgProduct = Metric * 34;
                    carbonTon = carbonKgProduct / 1000;
                    return carbonTon * amntMetric;
                }
            }
            break;
        case "COFFEE":
            if(foodOption == "COFFEE"){
                if(measurementSelect == 1)
                {
                    //Cup of Coffee 0.170097 kg Per
                    Metric = 0.170097;
                    carbonKgProduct = Metric * 34;
                    carbonTon = carbonKgProduct / 1000;
                    return carbonTon * amntMetric;
                }
            } 
            break;
        default:
    }        
}

//Algorithm For traditional vehicle carbon proudction
// FUNCTION INCLUDING MANUFACTURING carbonEmission = ((8887/avgMPG))*(milesDriven)+((720000/1131.64)*cost);
function tradVehicCarbon(fuelType, avgMPG, milesDriven){
    if(fuelType == "Gasoline")
    {
        carbonEmission = 0;
        carbonEmission = (((8887/avgMPG))*(milesDriven))/1000000;
        return carbonEmission;
    }
    else if(fuelType == "Diesel")
    {
        carbonEmission = 0;
        carbonEmission = (((10151/avgMPG))*(milesDriven))/1000000;
        return carbonEmission;
    }
}

//Algorithm for Electrical Reigon Anlaysis
function electricalRegCarbon(region, hours){
    //reigon defined by sub-acroynm refer to the egrid spreadsheet
    switch(region){
        case "AK":
            totalMetricTonKw = 0.740126066 ;
            pop = 734323;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "AZN/NM":
            totalMetricTonKw = 0.384010987 ;
            pop = 7276316 + 2115877;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "CA":
            totalMetricTonKw = 0.232919492;
            pop = 39237836;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "TEX":
            totalMetricTonKw = 0.371301411;
            pop =  29527941;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "FL":
            totalMetricTonKw = 0.379794679;
            pop = 21781128;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "HI":
            totalMetricTonKw = 1.26833395;
            pop = 1441553;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "ND/SD/NE/IA/MN/MI/WI":
            totalMetricTonKw = 1.659693128;
            pop: 774948 + 3193079 + 19636902 + 6805985 + 5707390 + 10050811 + 5895908;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "ME/NH/VT/MA/RI/CT":
            totalMetricTonKw =0.2395872934 ;
            pop: 1372247 + 1388992 + 645570 + 6984723 + 1095610 + 3605597;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break
        case "WA/OR/NV/UT/IO/MT":
            totalMetricTonKw = 0.2721552;
            pop = 7738692 + 4246155 + 3143991 + 3337975 + 1900923 + 1104271;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "NY":
            totalMetricTonKw = 0.939842624
            pop = 20201249;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "PA/NJ/DE/MD":
            totalMetricTonKw = 0.29596878;
            pop = 12964056 + 288994 + 1003384 + 6177224;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "IND/OH/WV":
            totalMetricTonKw = 0.44678812;
            pop = 6805985 + 11799448 + 1793716;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "CO/WY":
            totalMetricTonKw = .519272122;
            pop = 5812069 + 578803;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "KA/OK":
            totalMetricTonKw = 0.432726768
            pop = 2934582 + 3986639; 
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break
        case "MIS/IO":
            totalMetricTonKw = 0.671633674;
            pop = 6168187 + 12671469;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "AK/LA":
            totalMetricTonKw = 0.335839517;
            pop = 3025891 + 4624047; 
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "MISS/AL/GA":
            totalMetricTonKw =0.390179838;
            pop = 2949965 + 5039877 + 10799566
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "KEN/TN":
            totalMetricTonKw = 0.378386446;
            pop = 4509394 + 6975218;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
        case "VA/NC/SC":
            totalMetricTonKw = 0.282633175;
            pop = 8642274 + 10551162 + 5190705;
            carbonTon = (totalMetricTonKw/pop) *hours;
            return carbonTon;
        break;
    }
}

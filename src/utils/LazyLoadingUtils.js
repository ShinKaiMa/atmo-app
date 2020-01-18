class LazyLoadingUtils {
    static batchSize = 3;

    /**
     * This function should be called when just "isLoadingCompleteStatus array" is changed or current index changed while loading state is inactive.
     * @param {boolean[]} isLoadingCompleteStatus 
     * @param {boolean[]} isStartLoadingStatus 
     * @param {number} currentIdx 
     * @param {string} direction //right | left
     * @param {string} mode //conserve | all
     */
    static getNewStartLoadingStatus(isLoadingCompleteStatus, isStartLoadingStatus, currentIdx, direction, mode){
        // filter out not initialized and loading complete situation
        if(isLoadingCompleteStatus.length > 0 && isStartLoadingStatus.length > 0 && isLoadingCompleteStatus.includes(false)){
            let newStartLoadingStatus = [...isStartLoadingStatus];
            let traverseFrom = currentIdx;
            let unitStep = direction === 'left'? -1 : 1;
            let traverseTo = undefined;

            if(direction === 'left'){
                if(mode == 'conserve'){
                    traverseTo = traverseFrom - this.batchSize;
                    traverseTo = traverseTo < 0 ? 0 : traverseTo;
                } else {
                    traverseTo = 0; // load all weathermap
                }
            } else {
                if(mode == 'conserve'){
                    traverseTo = traverseFrom + this.batchSize;
                    traverseTo = traverseTo > newStartLoadingStatus.length -1  ? newStartLoadingStatus.length -1 : traverseTo;
                } else {
                    traverseTo = newStartLoadingStatus.length -1; // load all weathermap
                }
            }

            let idx = traverseFrom;
            do {
                if(!isLoadingCompleteStatus[idx] && !isStartLoadingStatus[idx]){
                    newStartLoadingStatus[idx] = true;
                    break;
                }

                if(idx === traverseTo)
                    break;

                idx = idx + unitStep;
            } while (true);
            return newStartLoadingStatus;
        } else {
            return [];
        }
    }
}

export {LazyLoadingUtils}
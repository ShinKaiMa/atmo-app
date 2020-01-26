class LazyLoadingUtils {
    static batchSize = 3;
    static conserveThreshold = 7;
    /**
     * This function should be called when just "isLoadingCompleteStatus array" is changed or current index changed while loading state is inactive.
     * @param {boolean[]} isLoadingCompleteStatus 
     * @param {boolean[]} isStartLoadingStatus 
     * @param {number} currentIdx 
     * @param {string} direction //right | left
     * @param {string} mode //conserve | all
     */
    static getNewStartLoadingStatus(isLoadingCompleteStatus, isStartLoadingStatus, currentIdx, direction){
        let mode = 'conserve';
        let loadedImgNum = isLoadingCompleteStatus.filter(isLoaded => isLoaded).length;
        if(loadedImgNum > this.conserveThreshold){
            mode = 'loadAllImg'
        }

        // filter out not initialized and loading complete situation
        if(isLoadingCompleteStatus.length > 0 && isStartLoadingStatus.length > 0 && isLoadingCompleteStatus.includes(false)){
            let newShouldStartLoading = [...isStartLoadingStatus];
            let traverseFrom = currentIdx;
            let unitStep = direction === 'left'? -1 : 1;
            let traverseTo = undefined;

            if(direction === 'left'){
                traverseFrom --; // shift left one from current Idx, current Idx lazy loading is handle by right direction.
                traverseFrom = traverseFrom < 0 ? 0 : traverseFrom;
                if(mode === 'conserve'){
                    traverseTo = traverseFrom - this.batchSize +1;
                    traverseTo = traverseTo < 0 ? 0 : traverseTo;
                } else {
                    traverseTo = 0; // load all weathermap
                }
            } else {
                if(mode === 'conserve'){
                    traverseTo = traverseFrom + this.batchSize;
                    traverseTo = traverseTo > newShouldStartLoading.length -1  ? newShouldStartLoading.length -1 : traverseTo;
                } else {
                    traverseTo = newShouldStartLoading.length -1; // load all weathermap
                }
            }

            let idx = traverseFrom;
            let changedIdx = undefined;
            do {
                if(!isLoadingCompleteStatus[idx] && !isStartLoadingStatus[idx]){
                    newShouldStartLoading[idx] = true;
                    changedIdx = idx;
                    break;
                }

                if(idx === traverseTo)
                    break;

                idx = idx + unitStep;
            } while (true);
            return {newShouldStartLoading, changedIdx};
        } else {
            return {newShouldStartLoading: isStartLoadingStatus, changedIdx: undefined};
        }
    }

    static isEqual(array1, array2){
        return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
    }
    
}

export {LazyLoadingUtils}
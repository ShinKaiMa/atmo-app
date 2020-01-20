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

            console.log(`currentIdx ${currentIdx}`)
           

            if(direction === 'left'){
                console.log(`dir left`)
                if(mode === 'conserve'){
                    console.log(`conserve`)
                    traverseTo = traverseFrom - this.batchSize;
                    traverseTo = traverseTo < 0 ? 0 : traverseTo;
                } else {
                    traverseTo = 0; // load all weathermap
                }
            } else {
                console.log(`dir right`)
                if(mode === 'conserve'){
                    console.log(`conserve`)
                    traverseTo = traverseFrom + this.batchSize;
                    traverseTo = traverseTo > newStartLoadingStatus.length -1  ? newStartLoadingStatus.length -1 : traverseTo;
                } else {
                    traverseTo = newStartLoadingStatus.length -1; // load all weathermap
                }
            }

            console.log(`mode ${mode}`)
            console.log(`newStartLoadingStatus ${newStartLoadingStatus}`)
            console.log(`traverseFrom ${traverseFrom}`)
            console.log(`unitStep ${unitStep}`)
            console.log(`traverseTo ${traverseTo}`)

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
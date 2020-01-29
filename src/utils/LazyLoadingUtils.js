class LazyLoadingUtils {
  static batchSize = 3;
  static conserveThreshold = 7;

  /**
   * @deprecated
   * This function should be called when just "isLoadingCompleteStatus array" is changed or current index changed while loading state is inactive.
   * @param {boolean[]} isLoadingCompleteStatus
   * @param {boolean[]} isStartLoadingStatus
   * @param {number} currentIdx
   * @param {string} direction //right | left
   * @param {string} mode //conserve | all
   */
  static getNewStartLoadingStatus(
    isLoadingCompleteStatus,
    isStartLoadingStatus,
    currentIdx,
    direction
  ) {
    let mode = "conserve";
    let loadedImgNum = isLoadingCompleteStatus.filter(isLoaded => isLoaded)
      .length;
    if (loadedImgNum > this.conserveThreshold) {
      mode = "loadAllImg";
    }

    // filter out not initialized and loading complete situation
    if (
      isLoadingCompleteStatus.length > 0 &&
      isStartLoadingStatus.length > 0 &&
      isLoadingCompleteStatus.includes(false)
    ) {
      let newShouldStartLoading = [...isStartLoadingStatus];
      let traverseFrom = currentIdx;
      let unitStep = direction === "left" ? -1 : 1;
      let traverseTo = undefined;

      if (direction === "left") {
        traverseFrom--; // shift left one from current Idx, current Idx lazy loading is handle by right direction.
        traverseFrom = traverseFrom < 0 ? 0 : traverseFrom;
        if (mode === "conserve") {
          traverseTo = traverseFrom - this.batchSize + 1;
          traverseTo = traverseTo < 0 ? 0 : traverseTo;
        } else {
          traverseTo = 0; // load all weathermap
        }
      } else {
        if (mode === "conserve") {
          traverseTo = traverseFrom + this.batchSize;
          traverseTo =
            traverseTo > newShouldStartLoading.length - 1
              ? newShouldStartLoading.length - 1
              : traverseTo;
        } else {
          traverseTo = newShouldStartLoading.length - 1; // load all weathermap
        }
      }

      let idx = traverseFrom;
      let changedIdx = undefined;
      do {
        if (!isLoadingCompleteStatus[idx] && !isStartLoadingStatus[idx]) {
          newShouldStartLoading[idx] = true;
          changedIdx = idx;
          break;
        }

        if (idx === traverseTo) break;

        idx = idx + unitStep;
      } while (true);
      return { newShouldStartLoading, changedIdx };
    } else {
      return {
        newShouldStartLoading: isStartLoadingStatus,
        changedIdx: undefined
      };
    }
  }

  /**
   * This function should be called when just "isLoaded array" is changed or current index changed while loading state is inactive.
   * @param {boolean[]} isLoadingCompleteStatus
   * @param {boolean[]} shouldStartLoading
   * @param {number} currentIdx
   */
  static getNewShouldStartLoadingStatus(
    isLoaded,
    shouldStartLoading,
    currentIdx
  ) {
    //get mode:
    let mode = "conserve"; //default mode
    let loadedImgNum = isLoaded.filter(isLoaded => isLoaded).length;
    if (loadedImgNum > this.conserveThreshold) {
      mode = "loadAllImg";
    }

    // filter out not initialized and loading complete situation
    if (
      isLoaded.length > 0 &&
      shouldStartLoading.length > 0 &&
      isLoaded.includes(false)
    ) {
      let changedIdx = undefined;
      let newShouldStartLoading = [...shouldStartLoading];

      //step 1. check current index is loaded or not
      if (!isLoaded[currentIdx] && !shouldStartLoading[currentIdx]) {
        // load current index
        newShouldStartLoading[currentIdx] = true;
        changedIdx = currentIdx;
        return { newShouldStartLoading, changedIdx }
      }

      //step 2. start to load righ direction, then left direction.
      let isGoinToCheckRightDirection = true; // checking state, "true: right, false: left"
      let baseStepFactor = 1;
      let lastGointToCheckIndex = undefined;
      do {
        // get next index;
        let gointToCheckIndex = isGoinToCheckRightDirection ? currentIdx + baseStepFactor : currentIdx - baseStepFactor;
        if (gointToCheckIndex > isLoaded.length -1){
            gointToCheckIndex = isLoaded.length -1
        } else if(gointToCheckIndex < 0){
            gointToCheckIndex = 0;
        }

        if(!isLoaded[gointToCheckIndex] && !shouldStartLoading[gointToCheckIndex]){
            newShouldStartLoading[gointToCheckIndex] = true;
            changedIdx = gointToCheckIndex;
            return { newShouldStartLoading, changedIdx };
        }

        if(isGoinToCheckRightDirection){
            isGoinToCheckRightDirection = !isGoinToCheckRightDirection;
        } else {
            isGoinToCheckRightDirection = !isGoinToCheckRightDirection;
            baseStepFactor ++
        }


        if(baseStepFactor > this.batchSize && mode === 'conserve'){
            return {
                newShouldStartLoading: shouldStartLoading,
                changedIdx: undefined
              };
        } else if(mode === 'loadAllImg' && lastGointToCheckIndex === gointToCheckIndex){
            return {
                newShouldStartLoading: shouldStartLoading,
                changedIdx: undefined
              };
        }
        lastGointToCheckIndex = gointToCheckIndex;
      } while (true);
    }
    // loaded complete situation
    else {
      return {
        newShouldStartLoading: shouldStartLoading,
        changedIdx: undefined
      };
    }
  }

  static isEqual(array1, array2) {
    return (
      array1.length === array2.length &&
      array1.every((value, index) => value === array2[index])
    );
  }
}

export { LazyLoadingUtils };

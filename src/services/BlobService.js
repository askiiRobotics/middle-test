/**
 * Service for blob files in native
 * in this case service provides API-functionality for saving images
 * instead of real API
 * 
 * @format
 * @flow
 */
'use strict';

import RNFetchBlob from 'rn-fetch-blob';

const CachedDictionary = []
export const BlobService = {
    // we do not save cache from session to session because it is temporary storage

    getFilePath: async function (uri: string): Promise<any> {
      let result: string = CachedDictionary[uri];
      if (result) {
        return result;
      }

      const res = await RNFetchBlob.config({
        fileCache: true,
      }).fetch('GET', uri);
      const filePath = res.path();
      result = `file://${filePath}`;
      CachedDictionary.push(uri, result);

      return result;
    }
}

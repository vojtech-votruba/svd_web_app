/*from copy import deepcopy
import numpy as np
from scipy import linalg
import cv2
import argparse

def svd(A_matrix, N: int):
    U = np.identity(A_matrix.shape[0])
    V_hermit = np.identity(A_matrix.shape[1])
    M = A_matrix
    for _ in range(N): # Paul Godfrey (2023). Simple SVD (https://www.mathworks.com/matlabcentral/fileexchange/12674-simple-svd), MATLAB Central File Exchange. 검색됨 2023/7/3. 
        Q, R = linalg.qr(M)
        Q_,R_ = linalg.qr(R.T)
        L = R_.T
        P = Q_

        U = U @ Q
        V_hermit =  P.T @ V_hermit
        M = L

    return [U,L,V_hermit]

def image_compression(path: str, rank: int, iter: int):
    img = cv2.imread(path)
    img_arr_decomposed = list(cv2.split(img))
    
    for seq,each in enumerate(img_arr_decomposed):
        U, Sigma, V_hermit = svd(each, iter)
        U_compressed = U[:,:rank]
        Sigma_compressed = Sigma[0:rank,:rank]
        V_hermit_compressed = V_hermit[:rank,:]
        result = U_compressed @ Sigma_compressed @ V_hermit_compressed 
        img_arr_decomposed[seq] = result

    output = (cv2.merge(img_arr_decomposed))
    cv2.imwrite("output.png", output)*/
    
export function svd() {
    return 0;
}

export function image_compression(path: string) {
    return path;
}


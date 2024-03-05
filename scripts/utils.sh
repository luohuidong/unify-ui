#!/bin/bash

utils::check_fail() {
    local code=$1 
    local error_text=$2 

    if [ $code -ne 0 ]; then
        echo "$2"
        exit 1
    fi
}

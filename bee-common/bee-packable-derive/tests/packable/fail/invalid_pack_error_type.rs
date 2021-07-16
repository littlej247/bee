// Copyright 2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

#![allow(unused_imports)]

use bee_packable::Packable;

use core::convert::Infallible;

#[derive(Packable)]
#[packable(pack_error = 1)]
#[packable(unpack_error = Infallible)]
pub struct Point {
    x: u32,
    y: u32,
}

fn main() {}
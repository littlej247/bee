// Copyright 2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

#![allow(unused_imports)]

use bee_common::packable::{Packable, UnknownTagError};

#[derive(Packable)]
#[packable(tag_type = u8)]
#[packable(error = UnknownTagError<u8>)]
pub enum OptI32 {
    #[packable(tag = 0)]
    None,
    #[packable(tag = 1)]
    Some(i32)
}

fn main() {}